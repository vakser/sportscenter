import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from "./store.service";
import {Brand} from "../shared/models/brand";
import {Type} from "../shared/models/type";
import {PageChangedEvent} from "ngx-bootstrap/pagination";
import {StoreModelService} from "./store.model.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  @Input() title: string = '';
  constructor(private storeService: StoreService, public storeData: StoreModelService, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.storeData.selectedBrand = {id: 0, name: 'All'};
    this.storeData.selectedType = {id: 0, name: 'All'};
    if (this.storeData.selectedBrand.id === 0 && this.storeData.selectedType.id === 0) {
      this.fetchProducts();
    }
    this.getBrands();
    this.getTypes();
  }

  pageChanged(event: PageChangedEvent): void {
    if (event.page !== this.storeData.currentPage) {
      this.storeData.currentPage = event.page;
      this.fetchProducts(this.storeData.currentPage);
    }
  }

  fetchProducts(page: number = 1) {
    const backendPage = page - 1;
    //Pass the selected brand/type ids
    const brandId = this.storeData.selectedBrand?.id;
    const typeId = this.storeData.selectedType?.id;
    let url = `${this.storeService.apiUrl}?`;
    if (brandId && brandId !== 0) {
      url += `brandId=${brandId}&`;
    }
    if (typeId && typeId !== 0) {
      url += `typeId=${typeId}&`;
    }
    if (this.storeData.search) {
      url += `keyword=${this.storeData.search}&`;
    }
    // Append backendPage and size parameters to the URL
    url += `page=${backendPage}&size=${this.storeData.pageSize}`;
    if (this.storeData.selectedSort !== 'asc') {
      url += `sort=name&order=${this.storeData.selectedSort}&`;
    }
    if (url.endsWith('&')) {
      url = url.slice(0, -1);
    }
    this.storeService.getProducts(brandId, typeId, url).subscribe({
      next: (data) => {
        this.storeData.products = data.content;
        this.storeData.pageable = data.pageable;
        this.storeData.totalElements = data.totalElements;
        this.storeData.currentPage = data.pageable.pageNumber + 1;
        this.toastrService.success('Products fetched!')
      },
      error: (err) => {
        this.toastrService.error('Error fetching data');
        console.log(err);
      }
    });
  }

  getBrands(){
    this.storeService.getBrands().subscribe({
      next:(response)=>(this.storeData.brands = [{id: 0, name:'All'}, ...response]),
      error:(error) =>console.log(error)
    });
  }

  getTypes(){
    this.storeService.getTypes().subscribe({
      next:(response)=>(this.storeData.types = [{id: 0, name: 'All'}, ...response]),
      error:(error) =>console.log(error)
    });
  }

  selectBrand(brand: Brand){
    //update the selected brand and fetch the products
    this.storeData.selectedBrand = brand;
    this.fetchProducts();
  }

  selectType(type: Type){
    //update the selected type and fetch the products
    this.storeData.selectedType = type;
    this.fetchProducts();
  }

  onSortChange() {
    this.fetchProducts();
  }

  onSearch() {
    this.fetchProducts();
  }

  onReset() {
    this.storeData.search = '';
    this.fetchProducts();
  }
}
