# quote-of-the-day
A simple server that returns a random quote upon each request.

NOTE:
Due to time constraint, instead of finding a server that can produce random quotes, a server that produces random joke of the day is used.
The server is located at https://sv443.net/jokeapi/v2/joke.


# Project Structure

The project source code structure is shown below:

![Project Structure](source_code_structure.png)

Some of these directories and hidden files are excluded in the ".gitignore" file.


# Testing

Test cases are stored in the "test" directory; this faciliatate the use of globally installed mocha. Each test file is also named in the <module>.test.js
format to facilitate the use of Jest. A test suite is created in an individual file for the corresponding source file in the "src" directory
(except for exitHandler.js, a task to be completed). The implemented tests cover the following aspects of testing to varying degree:
* REST API testing
* Integration testing
* End-to-End testing

A number of testing frameworks and libraries are used, including mocha and chai. Jest was added initially to do coverage testing. Later on, mocha was
also supplemented with nyc to carry out coverage testing.

The coverage test results showed that there are some untested areas. Other test results also showed that there is an issue with proper exiting in the
test code. Future enhancements should include the completion of these outstanding tasks.


# Coding 

VSCode is used as the development environment for the project. The "prettier" library and the "auto format on save" feature of VSCode were used together
to maintain a consistent style in the source code.


# Continuous Integration (CI) / Continuous Deployment

The source code of the project are version controlled using GitHub. Jenkins is used to create a CI/CD pipeline consisting of the following phases:
1. Code Checkout
   Jenkins polls GitHub periodically. If there is any changes, it retrieves the project source code from the repo.
2. Build
   Jenkins initiates the build of the project. In this case, it is simply ensuring that all dependencies are ready at hand.
3. Test
	 Jenkins invokes a test script to run tests.
4. Deploy
   Jenkins invokes a deploy script to deploy the app. A number of different tools are used, namely, Ansible, Docker, DockerHub, Kubernetes, AWS.
   The deployment procedure consists of:
	 1. Stop running docker containers
   2. Remove docker containers
   3. Remove docker image
   4. Build a new docker image of the project
   5. Create a new docker tag
   6. Push the new docker tag to Docker Hub.
   7. Remove the pushed docker image
   8. Create Kubernetes service on AWS
   9. Create a new Kubernetes deployment
   10. If docker image was updated in Docker Hub, update the deployment with new pods too.

Note that step 8 to step 10 of the Deploy phase have not been completed yet.

The console output of the Jenkins pipeline is shown below:
SuccessConsole Output
Started by user admin
Checking out git https://github.com/gitonthecloud/quote-of-the-day.git into /var/lib/jenkins/workspace/quote-of-the-day-pipeline@script to read Jenkinsfile
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
 > /usr/bin/git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > /usr/bin/git config remote.origin.url https://github.com/gitonthecloud/quote-of-the-day.git # timeout=10
Fetching upstream changes from https://github.com/gitonthecloud/quote-of-the-day.git
 > /usr/bin/git --version # timeout=10
 > git --version # 'git version 2.23.3'
 > /usr/bin/git fetch --tags --force --progress -- https://github.com/gitonthecloud/quote-of-the-day.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Seen branch in repository origin/main
Seen 1 remote branch
 > /usr/bin/git show-ref --tags -d # timeout=10
Checking out Revision 9655a800007707c19000fd19d6f44538d8163dcc (origin/main)
 > /usr/bin/git config core.sparsecheckout # timeout=10
 > /usr/bin/git checkout -f 9655a800007707c19000fd19d6f44538d8163dcc # timeout=10
Commit message: "fix deployment error"
 > /usr/bin/git rev-list --no-walk 9655a800007707c19000fd19d6f44538d8163dcc # timeout=10
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/lib/jenkins/workspace/quote-of-the-day-pipeline
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
 > /usr/bin/git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > /usr/bin/git config remote.origin.url https://github.com/gitonthecloud/quote-of-the-day.git # timeout=10
Fetching upstream changes from https://github.com/gitonthecloud/quote-of-the-day.git
 > /usr/bin/git --version # timeout=10
 > git --version # 'git version 2.23.3'
 > /usr/bin/git fetch --tags --force --progress -- https://github.com/gitonthecloud/quote-of-the-day.git +refs/heads/*:refs/remotes/origin/* # timeout=10
Seen branch in repository origin/main
Seen 1 remote branch
 > /usr/bin/git show-ref --tags -d # timeout=10
Checking out Revision 9655a800007707c19000fd19d6f44538d8163dcc (origin/main)
 > /usr/bin/git config core.sparsecheckout # timeout=10
 > /usr/bin/git checkout -f 9655a800007707c19000fd19d6f44538d8163dcc # timeout=10
Commit message: "fix deployment error"
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Code Checkout)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
 > /usr/bin/git rev-parse --is-inside-work-tree # timeout=10
Fetching changes from the remote Git repository
 > /usr/bin/git config remote.origin.url https://github.com/gitonthecloud/quote-of-the-day.git # timeout=10
Fetching upstream changes from https://github.com/gitonthecloud/quote-of-the-day.git
 > /usr/bin/git --version # timeout=10
 > git --version # 'git version 2.23.3'
 > /usr/bin/git fetch --tags --force --progress -- https://github.com/gitonthecloud/quote-of-the-day.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > /usr/bin/git rev-parse refs/remotes/origin/main^{commit} # timeout=10
Checking out Revision 9655a800007707c19000fd19d6f44538d8163dcc (refs/remotes/origin/main)
 > /usr/bin/git config core.sparsecheckout # timeout=10
 > /usr/bin/git checkout -f 9655a800007707c19000fd19d6f44538d8163dcc # timeout=10
Commit message: "fix deployment error"
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build)
[Pipeline] sh
+ npm install
npm WARN quote_of_the_day@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

audited 685 packages in 5.849s

41 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Test)
[Pipeline] sh
+ ./jenkins/scripts/test.sh

> quote_of_the_day@1.0.0 test /var/lib/jenkins/workspace/quote-of-the-day-pipeline
> nyc mocha --timeout 60000 --exit

http://localhost:4500 is ready


  API Tests
    ✓ retrieve one joke of the day successfully (1564ms)
    ✓ retrieve one joke of the day containing specified query parameter value successfully (1340ms)

  get quote
    ✓ axios get stub returns expected success
    ✓ axios get stub returns expected failure

  Server Tests
connected to server!
    ✓ connects to server successfully


  5 passing (3s)

----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |   84.62 |    72.73 |      80 |   84.62 |                   
 app.js         |   88.89 |      100 |   66.67 |   88.89 | 30                
 exitHandler.js |   72.73 |       50 |     100 |   72.73 | 3-4,12            
 getQuote.js    |     100 |      100 |     100 |     100 |                   
 server.js      |   81.82 |      100 |      50 |   81.82 | 17-18             
----------------|---------|----------|---------|---------|-------------------
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Deploy)
[Pipeline] sh
+ ./jenkins/scripts/deploy.sh

PLAY [localhost] ***************************************************************

TASK [Gathering Facts] *********************************************************
[WARNING]: Platform linux on host localhost is using the discovered Python
interpreter at /usr/bin/python, but future installation of another Python
interpreter could change this. See https://docs.ansible.com/ansible/2.9/referen
ce_appendices/interpreter_discovery.html for more information.
ok: [localhost]

TASK [building docker image] ***************************************************
changed: [localhost]

PLAY RECAP *********************************************************************
localhost                  : ok=2    changed=1    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0   

[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS


![Continuous Integration (CI) / Continuous Deployment](jenkins_pipeline_result.png)



# Future Enhancements / Bug fix Tasks 

1. Consider using NODE_ENV
2. Consider creating a env var module to read environment variables, and use this in other modules
3. Implement HTTPS if sensitive information are to be transmitted.
4. Fix test code so that it does not prevent jest/mocha from exiting at end of test.
5. Deploy app to Kubernetes on AWS.
