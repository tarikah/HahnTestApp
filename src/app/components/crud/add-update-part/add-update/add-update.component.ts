import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';
import { AddUpdatePartRequest } from 'src/app/models/Part';
import { PartsService } from 'src/app/services/parts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css'],
})
export class AddUpdateComponent implements OnInit {
  constructor(
    private partsService: PartsService,
    private params: ActivatedRoute,
    private router: Router
  ) {}
  @ViewChild('partForm') partForm: NgForm;
  part: AddUpdatePartRequest = {} as AddUpdatePartRequest;
  actionType: string = 'add';
  formData: any;
  ngOnInit() {
    var partId = this.params.snapshot.paramMap.get('id');
    if (partId) {
      this.actionType = 'update';
      this.partsService.getPart(parseInt(partId)).subscribe((part: any) => {
        console.log(partId, this.actionType, part);
        this.part = part;
      });
    }
    this.getFormData();
  }
  onSubmit() {
    if (this.actionType == 'add') {
      this.partsService.addPart(this.part).subscribe((x) => {
        this.router.navigateByUrl('/parts');
      });
    } else this.partsService.updatePart(this.part);
  }
  getFormData() {
    this.partsService.getFormData().subscribe((response) => {
      this.formData = response;
    });
  }
}
