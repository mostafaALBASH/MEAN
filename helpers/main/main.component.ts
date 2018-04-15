import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  quals: boolean = false;
  curr_state: boolean = false;
  demo_generator: boolean = false;
  emp_file: boolean = false;

  companion: boolean = false;
  languages: boolean = false;
  courses: boolean = false;
  experiences: boolean = false;
  contacts: boolean = false;
  vactions: boolean = false;


  components = {
    quals: this.quals, 
    curr_state: this.curr_state,
    demo_generator: this.demo_generator,
    emp_file: this.emp_file,
    companion: this.companion,
    languages: this.languages,
    courses: this.courses,
    experiences: this.experiences,
    contacts: this.contacts,
    vactions: this.vactions
  }

  closeAll = function () {
    var allComponents = this.components
    Object.keys(allComponents).forEach(function (key) { allComponents[key] = false });
    console.log(allComponents);
  }


  constructor() { }

  ngOnInit() {
  }

  toggleQual() {
    this.closeAll()
    this.components.quals = !this.components.quals;
  }

  toggleCurrState() {
    this.closeAll()
    this.components.curr_state = !this.components.curr_state;
  }

  toggleDemoFile() {
    this.closeAll()
    this.components.demo_generator = !this.components.demo_generator;
  }

  toggleEmployeeFile() {
    this.closeAll()
    this.components.emp_file = !this.components.emp_file;
  }


  toggleVactions() {
    this.closeAll()
    this.components.vactions = !this.components.vactions;

  }
  toggleContacts() {
    this.closeAll()
    this.components.contacts = !this.components.contacts;
  }

  toggleExperinces() {
    this.closeAll()
    this.components.experiences = !this.components.experiences;

  }
  toggleCourses() {
    this.closeAll()
    this.components.courses = !this.components.courses;

  }
  toggleCompanions() {
    this.closeAll()
    this.components.companion = !this.components.companion;

  }
  toggleLanguages() {
    this.closeAll()
    this.components.languages = !this.components.languages;

  }
}
