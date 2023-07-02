import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuiColumn } from '@generic-ui/ngx-grid';
import { ToastrService } from 'ngx-toastr';
import { GetPartResponse } from 'src/app/models/Part';
import { PartsService } from 'src/app/services/parts.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css'],
})
export class PartsComponent implements OnInit {
  source: Array<GetPartResponse> = [];
  columns: Array<GuiColumn> = [];
  loading: boolean = true;
  constructor(private _partsService: PartsService, private router: Router) {}

  ngOnInit(): void {
    this.getParts();
  }

  getParts() {
    this._partsService.getParts().subscribe((response) => {
      this.source = response;
      this.loading = false;
    });
  }

  editPart(item: any) {
    this.router.navigateByUrl(`/update/${item.id}`);
  }
  removePart(item: any) {
    this._partsService.removePart(parseInt(item.id)).subscribe((res) => {
      this.getParts();
    });
  }
}
