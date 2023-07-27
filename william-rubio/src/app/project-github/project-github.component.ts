import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'project-github',
  templateUrl: './project-github.component.html',
  styleUrls: ['./project-github.component.css']
})
export class ProjectGithubComponent {
  @Input() projectName = "Project Name";
  @Input() projectDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
  @Input() projectLanguage = "Python";
  @Input() projectLink = "www.examplelink.com";
  languageColor = "rgb(157, 94, 21)"


  ngOnInit() {
    if(this.projectLanguage == 'Java') {
      this.languageColor = "rgb(157, 94, 21)";
    } else if (this.projectLanguage == 'CSS'){
      this.languageColor = "rgb(65, 42, 101)";
    } else if (this.projectLanguage == 'HTML'){
      this.languageColor = "rgb(217, 53, 29)";
    } else {
      this.languageColor = "rgb(33, 74, 130)";
    }
  }
}
