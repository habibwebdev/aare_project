======  source ./venv/Scripts/activate  ====== Run the local environment
======  python manage.py runserver  ====== Run the server
======  python manage.py help  ====== Run the commands list
======  python manage.py collectstatic ====== run the command for static essets of btre folder to compile to main static folder(css, js)
======  python manage.py startapp accounts ====== Run the create the app named accounts
======  python manage.py makemigrations contacts ====== Run the create the migrations for contacts app model
======  python manage.py migrate ====== Run to create the table into the database


**********************************************************************


1- python -m venv ./venv

Run above commmand in the terminal and create the virtual environment.

2- source ./venv/Scripts/activate

To activivate the virtual environment, run the above command.

3- To deactivate the virtual environment run deactivate command in bash.

4- Now install Django with following command.

pip install django

5- To create django project run the following command with the help of django cli called django admin.

django-admin startproject btre .

6- django-admin help for all django commands.

7- Initialize the git repository by following command.

git init

8- Add .gitignore file and go to gitignore.io and enter django in create .gitignore file details copy and paste into local file.

9- Do the first commit by doing following command ("git add ." commit all the files).

git add . && git commit -m 'Initial commit'

10- Django comes with its own server. Run the Django server by following command.

python manage.py runserver

11- We gonna create multiple apps because in django project, there is concept of collection of django apps. First we ll create PAGES APP by following command.

python manage.py startapp pages

12- 'pages.apps.PagesConfig' add in settings.py into installed app list

13- Install autopep8 in virtual environment by running following command

pip install autopep8

14- Now create url file for this PAGES APP by creating file urls.py in pages folder

15- import views into urls.py file inside pages and then urlpatterns list where we ll pass views like below

urlpatterns = [
    path('', views.index, name='index') #root or home view
]

16- then import into urls.py file of btre folder into the urlpatterns list on above to set up home page like below

path('', include('pages.urls')),

17- then views.py file inside pages folder import HttpResponse and define the index function for home page like below

from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse('<h1>Hello World</h1>')
18- then in settings.py file of root btre folder add the templates inside the TEMPLATES list down inside the DIRS list of it like below

'DIRS': [os.path.join(BASE_DIR, 'templates')],

19- Now create template folder inside root called templates and then inside templates folder create pages folder

20- Create a base.html file where in templates folder all the header and footer code reside and we only have to extend in every view . By doing this we wont have to include header and footer code everytime in every view.

21- Create the static folder inside the btre folder of the root and import the css, js, webfonts folder inside it, also create img folder in the same location and import the lightbox folder along with area images inside. Rest of images folder with not be imported.

22- Then go to settings.py file of btre folder and in the end define STATIC_ROOT for static assets like following

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'btre/static')
]

23- Run the following command to collect the static assets described in settings.py, that will create static folder inside root and we have to add this static folder inside gitignore file.

python manage.py collectstatic

24- to load static assets load the following script at the top of the page then load the scripts or css files like below:

{% load static %}
{% static 'css/all.css' %}, {% static 'js/main.js' %}, {% static 'img/logo.png' %}

25- setting up the active links of navbar by adding conditionals.

26- create realtors and listing APPs by running following commands

python manage.py startapp listings
python manage.py startapp realtors

27- create inside listings folder of the root, urls.py for listing routes add the routes and then add this to btre folder's urls.py in urlpatterns list then add APPS we have created as in 26th step into the btre's settings.py under INSTALLED_APPS list.

28- Go to the listings folder then views.py and define function for views in below:

-listings
-listing
-search

29- Setup the Postgresql database by going to its site and down load its windows version of graphical interface

https://www.postgresql.org/

30- Install pgadmin as well after the postgresql

https://www.pgadmin.org/

31- we have installed postgresql then implement it and install couple of packages

- pip install psycopg2
- pip install psycopg2-binary

32- Go to the settings.py of btre and setup the database and all the stuff like follows:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'btredb',
        'USER': 'postgres',
        'PASSWORD': 'abbas',
        'HOST': 'localhost'
    }
}

33- Stop the server and run the migrations by following command

- python manage.py migrate

34- Create the schemas . Go to Schema.txt file for details

35 - Create Listing model inside listing folder then inside the models.py

36- Create realtor model inside realtors folder then models.py file inside

37- run the migrations with will create tables through listing and realtor  model we have created  by following command

- pip install Pillow

this is create migration:
- python manage.py makemigrations

Check for the query run the following command
- python manage.py sqlmigrate listings 0001

this is run the migrations
- python manage.py migrate

38- Start working Admin area by creating SuperUser by running following command

- python manage.py createsuperuser

After running the above command following will ask you following question for SuperUser
-Username (leave blank to use 'dell'): admin
-Email address: abbasali211@gmail.com
-Password:
-Password (again):
-This password is too common.
-Bypass password validation and create user anyway? [y/N]: y
Superuser created successfully.


39- To add listing stuff to admin area, for that go to listing folder then in admin.py, import models from lsiting by following

- from .models import Listing

40- To add realtor stuf to admin area, go to realtor golder then admin.py inside it and import models from realtor by following

- from .models import Realtor

41- Before adding to listings and realtors setup the media folder, Go to settings.py of btrefolder and add the following code to the end of settings.py file

# Media Folder Settings
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

42- Then to show up the media files to frontend go to url.py of btre folder and import the following

from django.conf import settings
from django.conf.urls.static import static

then add the following code at the end of the file

+ static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

43- go to the admin panel and add realtors and listings

44- Change the logo and css like colors in the admin area by creating folder inside templates folder named admin then create base_site.html inside that

45- Lets start working on the listing and realtor section of the admin panel, to do so we have to go to listings and realtor folder then in admin.py in there and then define ListingAdmin class or RealtorAdmin class accordingly and add that at the bottom where we already have defined or we rather say, registered with the admin, the Listing model or Realtor model.

46- Now pull data from backend and show at the frontend of tghe website, for that go to the listing folder then views.py and then import Listing model from .models

47- We need to install a package that would make vscode to recgnize the object that we are pulling from Listing because vscode is not recognizing it. Go to the google and search djnago has no object members. From there get the command and run the command which is as follows:

- pip install pylint-django

and then add the following code to the vscode

{"python.linting.pylintArgs": [
     "--load-plugins=pylint_django",
     "--errors-only"
],}

48- Now make dynamic content on listings.html by going to templates folder and then in listings.html and loop through the listings we have already passed in with index function
, for price to be with comma and to formatted correctly go to btre folder then in settings.py add the following at the end of INSTALLED_APPS

- 'djnago.contrib.humanize'

and then import it into the listings.html like below

- {% load humanize %}
with this we can have functions that we will use one of them with price that is intcomma, Refernce to django humanize

- https://docs.djangoproject.com/en/2.1/ref/contrib/humanize/

49- Now start working on pagination, Refernce:

- https://docs.djangoproject.com/en/2.1/topics/pagination/

50- Now make home page dynamic by going in pages folder then in views.py and then into the templates folder then into pages folder then into index.html

51- Now make about page dynamic by going in pages folder then in views.py and then into the templates folder then into pages folder then into about.html

52- Let's start working in singlelisting page

53- Now we will work on home page search, for that we will shorten the search form selection options by creating choices.py inside listing folder and then we will create dictionaries inside that file accordingly to the selection options

then import that into the pages app folder then into views.py like below

- from listings.choices import price_choices, bedroom_choices, state_choices

and pass them through context in the index function to home page view so we could loop through each choice instead of hardcoding them manually

54- Do the same for search.html as above by going to listings app folder then go to views.pt then in search function and there pass the choices into the context and that will  appear in search.html by looping through all choices accordingly.

55- Now we will work on Accounts like register and login USERS by creating account app by running following command

- python manage.py startapp accounts

56- create folder accounts inside templates and then  create  login.html, register.html, dashboard.html

57- create urls.py inside accounts app folder and then register that inside btre folder then into the settings.py file in INSTALLED_APP list and then inside brte folder bring them in to urls.py

58- create routes for login, register, logout, dashboard inisde urls.py of accounts app and then define the medthods for these routes inisde the views.py of accounts app folder

59- To setup messages after form submission we need to enable it because django does give us builtin support for this.
For this to enable we need to go to btre folder then settings.py and add the following code at the end of the file:

# Messages
MESSAGE_TAGS = {
    messages.ERROR: 'danger',
}

60- Now create the alert code by creating a file inside partials folder which is inside templates folder, named  _alerts.html, and then add javascript code into the main.js file of static folder of btre folder then run command to make it global means set it in root static folder's js's main.js file

- python manage.py collectstatic

61- lets start working on register functionality by creating logic inside views.py's register function of accounts app folder

62- lets start working on login functionality by creating logic inside views.py's login function of accounts app folder

63- Now start working on logout functionality inside views.py's logout function of accounts app folder

64- Set the dynamic page title by going to templates folder and then base.html

65- Start working on make an inquery modal from listing.html by creating contact app as follows:

- python manage.py startapp contacts

dont forget to put the new created app, into the installed app

66- then create model inside contacts app and then create migrations by put the new app

- python manage.py makemigrations contacts

67- then run the migrations as follows:

- python manage.py migrate

68- to view contacts in backend we need to register it admin.py of the same folder

69- then create urls.py inside contacts file and then define it inside main urls.py's list of btre folder and the define the view function inside the views.py of contacts app folder for it to work


70- prepare the contact form in the listing.html in listings folder of templates folder of root

71-  now setup emails ending when contact make an inquery and email would go to relative realtor for that go  to btre folder's settings.py and add following settings at the end of file

# Email Config
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'email@gmail.com'
EMAIL_HOST_PASSWORD = 'password'
EMAIL_USE_TLS = True

72- Start working on dashboard by make its content dynamic

73- Push the code to github by following stuff check the gitignore by (- cat .gitignore) command

- create new repositary
- git init (initialize the git)
- git add . (adds everthing to staging area)
- git commit -m 'Initial Commit' (commit with comment)
