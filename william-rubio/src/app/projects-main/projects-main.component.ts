import { Component } from '@angular/core';

@Component({
  selector: 'projects-main',
  templateUrl: './projects-main.component.html',
  styleUrls: ['./projects-main.component.css']
})
export class ProjectsMainComponent {
  projects= [
    {projectName: 'EquiScore', projectDescription: 'EquiScore is a deep learning model capable of accurately assesing the body condition of a horse.', projectLink:'https://github.com/guillerubio/EquiScore', projectLanguage:'Python'},
    {projectName: 'william-rubio.com', projectDescription: 'william-rubio.com is my project portfolio website, made essentialy in HTML and CSS, in the Angular framework.', projectLink:'https://github.com/guillerubio/william-rubio.com', projectLanguage:'HTML'},
    {projectName: 'Artgonuts-Landing-Page', projectDescription: 'A prototype of the Artgonuts landing page using Angular, TypeScript, HTML, CSS and many many libraries', projectLink:'https://github.com/guillerubio/Artgonuts-Landing-Page', projectLanguage:'TypeScript'},
    {projectName: 'Attention-is-all-you-need', projectDescription: 'To learn about language models, what better than to create one?', projectLink:'https://github.com/guillerubio/Attention-is-all-you-need', projectLanguage:'Roff'}
  ]

}
