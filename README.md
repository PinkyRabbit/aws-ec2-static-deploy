# aws-ec2-static-deploy

This project is a template of auto deploy the application from GitHub to AWS EC2.

It is implemented using the [easingthemes/ssh-deploy](https://github.com/easingthemes/ssh-deploy) action library. You can find a more detailed description of the configuration features there.

The template contains index.html, 404.html and 500.html pages that NGINX uses.

## Deploy configuration

To run the deployment, you need to configure the following variables (secrets) for your github repository:

### REMOTE_USER and EC2_SSH_KEY

you need to create a new user and ssh key in your EC2.
```shell
sudo useradd new_user
sudo passwd -l new_user
sudo mkdir -p /home/new_user/.ssh
sudo touch /home/new_user/.ssh/authorized_keys
sudo chown -R new_user:new_user /home/new_user/.ssh
sudo chmod 700 /home/new_user/.ssh
sudo chmod 600 /home/new_user/.ssh/authorized_keys
sudo su - new_user
cd /home/new_user/.ssh
ssh-keygen -m PEM -t rsa -b 4096
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/id_rsa
```

`new_user` = your user

Note:

`PUBLIC key` is for EC2 and you copy it with `cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys`

`PRIVATE key` is for github. Fully copy it to `EC2_SSH_KEY`

### REMOTE_HOST 

Get it from AWS EC2 configuration.

Sample:
`ec2-34-213-48-149.us-west-2.compute.amazonaws.com`

### DIR_NAME 

The directory where you push the project

Sample
`/var/www/myproject`

