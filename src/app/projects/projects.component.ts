import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  
  projectGroup: ProjectGroup[] = [
    {
      projecttype: "Front End Project",
      courses: [
        {
          title: "Book_marker ",
          description: "website For save your website links ",
          image: "../../assets/images/ProjectF/bookmarker.png",
          buttons: [
            {
              text: "Learn More",
              type: "primary"
            }
          
          ],
          link :'https://ali-ashraf-510.github.io/book-marker/'  
        },
        {
          title: "Weather App",
          description: "website to show current weather ina all countery",
          image: "../../assets/images/ProjectF/weatherApp.png",
          buttons: [
            {
              text: "Learn More",
              type: "primary"
            }
          ],
          link :'https://ali-ashraf-510.github.io/weather-website/'
        },
        
        {
          title: "mr Khaled",
          description: "teacher wbsite to learn english",
          image: "../../assets/images/ProjectF/c4.jpg",
          buttons: [
            {
              text: "Learn More",
              type: "primary"
            }
          ],
          link :'https://ali-ashraf-510.github.io/mr-khaled/'
        },

       
        // Other course objects...
      ]
    },
    // {
    //   projecttype: "Machine Learning Project",
    //   courses: [
    //     {
    //       title: "Project 1",
    //       description: "A fun way for kids to learn programming by creating interactive stories and games.",
    //       image: "../../assets/images/Projectml/c1.jpg",
    //       buttons: [
    //         {
    //           text: "Learn More",
    //           type: "primary"
    //         }
    //       ]
    //     },
    //     {
    //       title: "Project 2",
    //       description: "A fun way for kids to learn programming by creating interactive stories and games.",
    //       image: "../../assets/images/Projectml/c1.jpg",
    //       buttons: [
    //         {
    //           text: "Learn More",
    //           type: "primary"
    //         }
    //       ]
    //     },
    //     {
    //       title: "Project 3",
    //       description: "A fun way for kids to learn programming by creating interactive stories and games.",
    //       image: "../../assets/images/Projectml/c1.jpg",
    //       buttons: [
    //         {
    //           text: "Learn More",
    //           type: "primary"
    //         }
    //       ]
    //     }
    //     // Other course objects...
    //   ]
    // },
  ];
}

interface Button {
  text: string;
  type: 'primary' | 'success';
}

interface Course {
  title: string;
  description: string;
  image: string;
  link :string
  buttons: Button[];
}

interface ProjectGroup {
  projecttype: string;
  courses: Course[];
}
