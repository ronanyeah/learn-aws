# Founders & Coders AWS Workshop
A wild ride through the Amazon cloud! Go from nothing to a Full Stack AWS hosted app.

## What we will will learn today:
- How to set up AWS security properly.
  - **Identity and Access Management (IAM)**
- How to host your website on AWS.
  - **Elastic Beanstalk**
- How to deploy your website using the command line.
   - **EB CLI**
- How to set up online file storage system for your site.
  - **Amazon S3**
- How to set up a MySQL database, autolinked to your site.
  - **Amazon RDS**

* * *

**Prerequisites:**  
[Things to Install](https://hackpad.com/Founders-Coders-AWS-Workshop-qzvthpfn1QN)  
[Bash Script Environment Variables](https://github.com/ronanyeah/bash-export)

* * *

##Step 1 - Check out the UI
- Add icons to the nav bar.

##Step 2 - Create a security role for your app
- Don't attach a default policy, we'll create one.

##Step 3 - Create a policy for your app
- This is where you set the privileges that your app has within AWS.
- For this app, the permissions necessary are `s3:PutObject` and `s3:PutObjectAcl` (access control list).
  - [Policy Docs](http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html)
  - [Policy Options](http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actionsconditions.html)
  - [S3 Policy Options](http://docs.aws.amazon.com/IAM/latest/UserGuide/list_s3.html)
- ARN should be `arn:aws:s3:::bucketname/*`
  - [ARN DOCS](http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html)

##Step 4 - Attach the policy to your app's role

##Step 5 - Create a user for yourself
- This is to provide you with command line AWS privileges.
- Attach Elastic Beanstalk policy.

##Step 6 - Create an Elastic Beanstalk application
- Use the sample application provided.
- Create an RDS with it.
- Set the instance role to the one you made.

##Step 7 - Set up S3 Bucket
- Put bucket name in `env.sh` file and in the Elastic Beanstalk environment variables.

##Step 8 - Add external access to the RDS
- Add a line to it's security group.
- Check it out using MySQL Workbench.
- Add RDS environment variables to `env.sh`.

##Step 9 - Run server
- Has a line in the DB been created?

##Step 10 - Upload some files
- Go to S3 and look at the file permissions.

##Step 11 - Initialise Elastic Beanstalk
- `eb init`
- What has it created?
- Why has the `.gitignore` been edited?

##Step 12 - Deploy!
- `eb deploy`

* * *

##Challenge
- Change the code so that it deletes the old picture when adding new ones. ([Hint](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html))

* * *

**Useful:**  
- [AWS Node SDK Docs](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/_index.html)
- [EB Deploy Docs](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-deploy.html)
- [AWS Environment Variables](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#cli-environment)
- [Accessing instances using SSH](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html)
- [Service Roles](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts-roles.html?console_help=true)

**Extras:**  
- Build tools and AWS prestart
- Billing alerts
- `.ebextensions`
- EB logs
- Multi Factor Authentication