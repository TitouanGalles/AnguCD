import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CD } from '../models/cd.model';

@Component({
  selector: 'app-new-cd',
  standalone: false,
  templateUrl: './new-cd.component.html',
  styleUrl: './new-cd.component.scss'
})
export class NewCDComponent implements OnInit {
  formulaire!: FormGroup;
  currentCD!: CD;
  thumbRegex! :RegExp | undefined;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void{
    this.formulaire = this.formBuilder.group({
      title: [null],
      author: [null],
      thumbnail: [null],
      dateDeSortie: [null],
      quantite: [null],
      price: [null],
    })

    this.thumbRegex = new RegExp('https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$');

    this.formulaire = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(6)]],
        author: [null, [Validators.required, Validators.minLength(6)]],
        thumbnail: [null, [Validators.required, Validators.pattern(this.thumbRegex)]],
        dateDeSortie: [null, [Validators.required, Validators.minLength(0)]],
        quantite: [null, [Validators.required, Validators.minLength(0)]],
        price: [null, [Validators.required, Validators.minLength(0)]],
    },
    {updateOn: 'blur'}
    );

    this.formulaire.valueChanges.subscribe((formValue)=> {
      this.currentCD = {
        id: 0,
        title: formValue.title,
        author: formValue.author,
        thumbnail: formValue.thumbnail,
        dateDeSortie: formValue.dateDeSortie,
        quantite: formValue.quantite,
        price: formValue.price,
        onsale: false
      };
    })
  }

  addCD(): void{
    let newCD: CD = {
      id: 0,
      title: this.formulaire.get('titre')?.value,
      author: this.formulaire.get('author')?.value,
      thumbnail: this.formulaire.get('thumbnail')?.value,
      dateDeSortie: this.formulaire.get('dateDeSortie')?.value,
      quantite: this.formulaire.get('quantite')?.value,
      price: this.formulaire.get('price')?.value,
      onsale: false

    }
  }

  ajouterCd(): void{

  }
}
