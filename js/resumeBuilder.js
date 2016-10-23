/*Bio*/
var bio = {
    "name": "Prasanna Venkatesh",
    "role": "Front End Web Developer",
    "contacts": {
        "Mobile": 8939064565,
        "Email": "rprasanna222@gmail.com",
        "github": "Prasanna4617",
        "twitter": "@rprasanna222",
        "location": "Chennai"
    },
    "welcomeMessage": "Hello Everyone",
    "skills": ["Honest", "Optimistic", "Helpful", "Programming"],
    "biopic": "images/fry.jpg",

    "display": function() {
        /*Header*/
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

        /*Contacts*/
        $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.Mobile));
        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.Email));
        $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkills);
            }
        }
    }
};

// /*Education*/
var education = {
    "schools": [{
        "name": "Jaigopal Garodia Matriculation Higher Secondary School",
        "location": "Kolathur,Chennai",
        "degree": "Higher Secondary",
        "majors": ["CS"],
        "dates": 2012,
    }, {
        "name": "Madras Institute Of Technology",
        "location": "Chrompet,Chennai",
        "degree": "Bachelor of Engineering",
        "majors": ["ECE"],
        "dates": "2012-2016"
    }],

    "onlineCourses": [{
        "title": "Front End Web Development",
        "school": "Udacity",
        "dates": "September'15-December'15",
        "url": "https://www.udacity.com"
    }, {
        "title": "iOS Development",
        "school": "Udacity",
        "dates": "September'16-Present",
        "url": "https://www.udacity.com"
    }],
    "display": function() {
        if (education.schools.length > 0) {
            education.schools.forEach(function(school) {
                $("#education").append(HTMLschoolStart);
                var formattedName = HTMLschoolName.replace("%data%", school.name);
                var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
                var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
                var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
                var EducationName = formattedName + formattedDegree;

                $(".education-entry:last").append(EducationName);
                $(".education-entry:last").append(formattedLocation);
                $(".education-entry:last").append(formattedDates);
                for (var j = 0; j < school.majors.length; j++) {
                    var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors[j]);
                    $(".education-entry:last").append(formattedMajor);
                }
            });
            if (education.onlineCourses.length > 0) {
                $("#education").append(HTMLonlineClasses);
                for (var i = 0; i < education.onlineCourses.length; i++) {
                    $("#education").append(HTMLschoolStart);
                    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
                    var courseTitle = formattedTitle + formattedSchool;

                    $(".education-entry:last").append(courseTitle);
                    $(".education-entry:last").append(formattedDates);
                    $(".education-entry:last").append(formattedURL);

                }
            }
        }
    }
};

/*Work*/
var work = {
    "jobs": [{
        "employer": "Facebook",
        "title": "Technical Program Management",
        "dates": "In Progress",
        "location": "Menlo Park,California, United States",
        "description": "Working as technical program manager in Facebook Inc."
    }, {
        "employer": "Infosys",
        "title": "Front-End Web Developer",
        "dates": "February'14 - March'16",
        "location": "Chennai",
        "description": "Worked as Front-end Developer in Infosys.The Job includes designing creative webpages using HTML,CSS and JavaScript"
    }],
    "display": function() {
        for (var job = 0, len = work.jobs.length; job < len; job++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var EmployerTitle = formattedEmployer + formattedTitle;
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $(".work-entry:last").append(EmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedLocation);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

/*Projects*/
var projects = {
    "projects": [{
        "title": "Portfolio Site",
        "dates": "October 2016",
        "description": "Design and develop a responsive website that will display images, descriptions and links to each of the portfolio projects completed throughout the course of the Front-End Web Developer Nanodegree.",
        "images": ["images/portfolio1_.png", "images/portfolio2_.png"]
    }, {
        "title": "Animal Trading Cards",
        "dates": "September 2016",
        "description": "Design a simple animal trading card using HTML and CSS properties.",
        "images": ["images/animal.png"]
    }, {
        "title": "AES Cryptosystem with RSSI based key generation",
        "dates": "January 2016",
        "description": "To design a secure communication system against passive attacks using symmetric key cryptosystem with dynamic keys generated by exploiting the channel characteristics.",
        "images": ["images/aes.png"]
    }, {
        "title": "Password Based Door Lock System",
        "dates": "October 2015",
        "description": "Password based lock system with a Bluetooth module and Terminal App at Receiver/Transmitter using Arduino Microcontroller.",
        "images": [""]
    }],
    "display": function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);
            for (var i = 0; i < project.images.length; i++) {
                var formattedImage = HTMLprojectImage.replace("%data%", project.images[i]);
                $(".project-entry:last").append(formattedImage);
            }
        });
    }
};

bio.display();
work.display();
projects.display();
education.display();

/*Map*/
$("#mapDiv").append(googleMap);
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y); // your code goes here
});

/*Internationalize*/
$("#main").append(internationalizeButton);

function inName(oldName) {
    var inName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    inName = names.join(" ");
    return inName;
}
inName(bio.name);  