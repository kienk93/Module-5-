import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({}
  );
  // @ts-ignore
  id: number;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      this.productForm =  new FormGroup({
        // @ts-ignore
        id: new FormControl(product.id),
        // @ts-ignore
        name: new FormControl(product.name),
        // @ts-ignore
        price: new FormControl(product.price),
        // @ts-ignore
        description: new FormControl(product.description),
      })

    })
  }
  getProduct(id: number) {
    return this.productService.findById(id);
  }
  updateProduct(id: number){
    const product = this.productForm.value;
    this.productService.updateProduct(id, product);
    alert('Cập nhật thành công');
  }


}
