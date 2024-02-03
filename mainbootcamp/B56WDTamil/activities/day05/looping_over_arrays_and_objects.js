

// 1. Create your own resume data in json

let resume = {
    
      "name": "Jeeva Madhaiyan",
      "label": "Aspiring FullStack Developer",
      "email": "jeelion22@gmail.com",
      "phone": "+91 967 706 1448",
      "urls": ["https://github.com/jeelion22", "https://www.linkedin.com/in/jeeva-madhaiyan-090860107/"],      
      "summary": "Physics Professional to Software Developer",        
      "education": "Master of Philosophy in Theoretical Physics",   
      "certificates": ["Python for Datascience","Scientific Computing with Python", "Python Development Industrial Training"],   

    "skills": ["JavaScript", "Python", "OOPS", "FastAPI", "SQLAlchemy", "Postgresql", "Alembic", "deployment", "pytest"],
 
    "languages": ["Tamil", "English"], 
   "projects": ["APIs' for a simple Blog Aplication"]
  }
  

// 2. For the above JSON, iterate over all for loops (for, for...in, for...of, forEach)


// using for...in loop

for (let key in resume) {
  if (resume.hasOwnProperty(key)) {
    // Use JSON.stringigy() method to print values as it is for the use of template iterals
      console.log(`${key}: ${JSON.stringify(resume[key])}`);
  }
}

// JSON.stringify(resume[key], null, 2)

/*
name: "Jeeva Madhaiyan"
label: "Aspiring FullStack Developer"
email: "jeelion22@gmail.com"
phone: "+91 967 706 1448"
urls: ["https://github.com/jeelion22","https://www.linkedin.com/in/jeeva-madhaiyan-090860107/"]
summary: "Physics Professional to Software Developer"
education: "Master of Philosophy in Theoretical Physics"
certificates: ["Python for Datascience","Scientific Computing with Python","Python Development Industrial Training"]
skills: ["JavaScript","Python","OOPS","FastAPI","SQLAlchemy","Postgresql","Alembic","deployment","pytest"]
languages: ["Tamil","English"]
projects: ["APIs' for a simple Blog Aplication"]
*/


// ====================================================================================================



// use of for loop

resumeArray = [resume]

for (let i = 0; i < resumeArray.length; i++) {  
    console.log(resumeArray[i]);
  }


/*
{
  name: 'Jeeva Madhaiyan',
  label: 'Aspiring FullStack Developer',
  email: 'jeelion22@gmail.com',
  phone: '+91 967 706 1448',
  urls: [
    'https://github.com/jeelion22',
    'https://www.linkedin.com/in/jeeva-madhaiyan-090860107/'
  ],
  summary: 'Physics Professional to Software Developer',
  education: 'Master of Philosophy in Theoretical Physics',
  certificates: [
    'Python for Datascience',
    'Scientific Computing with Python',
    'Python Development Industrial Training'
  ],
  skills: [
    'JavaScript', 'Python',
    'OOPS',       'FastAPI',
    'SQLAlchemy', 'Postgresql',
    'Alembic',    'deployment',
    'pytest'
  ],
  languages: [ 'Tamil', 'English' ],
  projects: [ "APIs' for a simple Blog Aplication" ]
}
*/

  
  
// ==========================================================================================================

// using for...of loop

for (let item of resumeArray) {
  for (let k in item){
    console.log(`${k}: ${item[k]}`);
  }
}
 
/*
name: Jeeva Madhaiyan
label: Aspiring FullStack Developer
email: jeelion22@gmail.com
phone: +91 967 706 1448
urls: https://github.com/jeelion22,https://www.linkedin.com/in/jeeva-madhaiyan-090860107/
summary: Physics Professional to Software Developer
education: Master of Philosophy in Theoretical Physics
certificates: Python for Datascience,Scientific Computing with Python,Python Development Industrial Training
skills: JavaScript,Python,OOPS,FastAPI,SQLAlchemy,Postgresql,Alembic,deployment,pytest
languages: Tamil,English
projects: APIs' for a simple Blog Aplication
*/
// ============================================================================================================ 

// using forEach loop

function printObj (obj) {
for (key in obj) {
 console.log(`${key}: ${obj[key]}`)
}
}

resumeArray.forEach((ele => printObj(ele)))

/*
name: Jeeva Madhaiyan
label: Aspiring FullStack Developer
email: jeelion22@gmail.com
phone: +91 967 706 1448
urls: https://github.com/jeelion22,https://www.linkedin.com/in/jeeva-madhaiyan-090860107/
summary: Physics Professional to Software Developer
education: Master of Philosophy in Theoretical Physics
certificates: Python for Datascience,Scientific Computing with Python,Python Development Industrial Training
skills: JavaScript,Python,OOPS,FastAPI,SQLAlchemy,Postgresql,Alembic,deployment,pytest
languages: Tamil,English
projects: APIs' for a simple Blog Aplication
*/
