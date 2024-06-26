import { Component } from '@angular/core';
import { MasterService } from '../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mergeppt',
  templateUrl: './mergeppt.component.html',
  styleUrls: ['./mergeppt.component.scss']
})
export class MergepptComponent {

  reportFile:any;

  constructor( private ApiService: MasterService,
    private router: Router,
  ){

  }

  SubmitFile(){
    let formData = new FormData();
    formData.append('file',this.AttachFiles);

    this.ApiService.mergePPt(formData).subscribe((data: any) => {
      console.log(data);
      let value = JSON.stringify(data)
      localStorage.setItem('SplitData',value)

      this.router.navigate(['metadata']);
    } )
  }

  AttachFiles:any;
  uploadFile(e: any) {
    this.AttachFiles = e.target.files[0];
    console.log(this.AttachFiles,'file');
    
  }

}
