import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  bookList: Array<any> = [{
    title: "Száz év magány",
    year: 1967,
    category: "dráma",
    imageUrl: "https://images.unsplash.com/photo-1522728000856-8721ca26ccd6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    author: "Gabriel García Márquez",
    id: 1
},
{
    title: "Szerelem a kolera idején",
    year: 1985,
    category: "dráma",
    imageUrl: "https://1.bp.blogspot.com/-dZUWI4Pkyms/VbsV3lSJBxI/AAAAAAAAKdk/iXxlnGsZw9w/s1600/covers_43908.jpg",
    author: "Gabriel García Márquez",
    id: 2
},
{
    title: "Bűn és bűnhődés",
    year: 1866,
    category: "dráma",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Crime_and_Punishment-1.png",
    author: "Fjodor Mihajlovics Dosztojevszkij",
    id: 3
},
{
    title: "Egri csillagok",
    year: 1901,
    category: "akció",
    imageUrl: "https://kepeskiado.hu/wp-content/uploads/2019/02/Egri-Csillagok-borito.jpg",
    author: "Gárdonyi Géza",
    id: 5
},
{
    title: "Kincskereső kisködmön",
    year: 1918,
    category: "dráma",
    imageUrl: "https://www.antikvarium.hu/foto/mora-ferenc-kincskereso-kiskodmon-4186758-eredeti.jpg",
    author: "Móra Ferenc",
    id: 6
}];

showModal = false;
actualImage = '';

  constructor() { }

  ngOnInit(): void {
  }


  updateList = () => {
  }

  showImage = (url:string) => {
    this.showModal = true;
    this.actualImage = url;
  }

  closeImage = () => {
    this.showModal = false;
  }



}
