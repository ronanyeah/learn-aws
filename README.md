# learn_aws
a wild ride through the amazon cloud

What we will will learn today:
- how to set up aws security properly
  > Identity and Access Management (IAM)
- how to deploy and host a website on aws
  > elastic beanstalk
- how to set up online file storage system
  amazon s3
- how to set up a mysql database, autolinked to your website
  > amazon rds

prereqs -
https://hackpad.com/Founders-Coders-AWS-Workshop-qzvthpfn1QN

extras:
- aws prestart and building
- billing alerts
- eb extensions
- eb logs
- multi factor

pre -
go through the repo as well saying quickly what the code does and when everyone is cool with that, start going through the AWS steps
there might be little things along the way that arent the most efficient

steps-
1 add icons to taskbar and show them th ui

2 create a role for your app to use. this defines the privileges that your app can use within AWS. attach no policy.

3 create a policy for your app.
putobject
putobjectacl (access control list)

policy docs
http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actionsconditions.html
s3 policy docs
http://docs.aws.amazon.com/IAM/latest/UserGuide/list_s3.html

arn is arn:aws:s3:::bucketname
http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html
policy details
http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html

4 attach the policy to your role

5 create a user for yourself, show them around user, and attch aws policy eb full access. now warn them that those keys can be used to launch instances.

6 go to eb and create an application
create an rds with it
env tags
http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html
set instance role to the one you made

7 as it runs, set up an s3 bucket
explain cors etc also
put bucket name in env file and in eb env vars
(wouldn't surprise me if there is a native way to do this)

8 add anywhere access to rds database

9 add db envs and look at db in workbench

10 run server

11 upload some files and look at their permissions

12 eb init, choose ireland, choose aplcation. remind them this is their eb permissions at work
see how gitignore changes

13 see site then got throuh code and look at the sdk

eb deploy docs -
http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-deploy.html

env var docs -
http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-environment

do user key stuff

make role for the app too

then create application

(with an rds)

do all the setup with the sample application

then command line to create and deploy and environment 

edit sql security group

https://console.aws.amazon.com/iam/home?region=eu-west-1#policies

http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html

being asked about connect via ssh
http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html


service roles
https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts-roles.html?console_help=true

s3 docs
    // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
