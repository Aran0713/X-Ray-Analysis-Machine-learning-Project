https://flask.palletsprojects.com/en/2.2.x/installation/

<h1>
VENV Virtual Environment
</h1>

I recommend installing the virtual environment. Use a virtual environment to manage the dependencies for your project, both in development and in production, also have specific PATH variables for program.

> mkdir myproject
> cd myproject
> py -3 -m venv venv

windows
> venv\Scripts\activate
Linux/Mac
. venv/bin/activate

type 'deactivate' to disable
>deactivate


Jan 31st/2023
I installed venv in the home directory of flask user, as the executable binaries in venv were not enabled in the folder permisions of the shared drive


<h1>
Install flask
</h1>

>pip install Flask

<h1>
Run flask
</h1>

>flask --app hello run