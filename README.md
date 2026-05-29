# CSCI4177 Lab 2
This lab builds on top of Lab 1 by adding in the following pages: login, signup and dashboard.
Login page performs basic email and password validation.On success, the details are stored in context and user is navidated to dashboard.
Signup page performs basic validation of entered details. Pretends to create account, stores details in context and
navigates to dashboard.
Dashboard page has a navbar that displays the username, signout option. An apartment card grid is also present with
dummy data, images, search bar, filter and sort buttons. The root is protected.

The scope of the lab has been clarified to focus on the code regarding context and root protection, we were also told
that storing and retreiving user credentials from a file would be taught later and is not needed for this lab. Therefore
basic validation does not match against a list of known credentials as of now, it simply validates according to common
email, password, username requirements on websites for both login and signup.

UI has been designed using bootstrap to roughly match what was shown in lab.
Deployment has been done on Netlify (URL below).


* *Date Created*: 28th May 2026
* *Last Modification Date*: 28th May 2026
* *Deployment URL*: <https://csci4177lab2satwikgorla.netlify.app>
* *GitHub Link URL*: <https://github.com/NoobKingu/CSCI4177L2>


## Authors
* [Satwik Gorla](st325640@dal.ca) - (Developer)


## Built With
* [Bootstrap](https://getbootstrap.com) - The CSS framework used
* [React + Vite](Installed using NPM) - Code and Build



## Sources Used

Code given in lab2 documents were modified to fit this lab, lab 1 code was extended to fit this lab.