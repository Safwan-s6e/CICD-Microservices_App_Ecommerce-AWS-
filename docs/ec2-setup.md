# 🚀 Setting Up EC2 for Docker and AWS CLI

## **1️⃣ Launching an EC2 Instance**
1. Go to AWS Console → EC2 Dashboard  
2. Click **Launch Instance**  
3. Configure the instance:  
   - **Name**: `DevOps-EC2`
   - **AMI**: Amazon Linux 2  
   - **Instance Type**: `t3.micro` (Free Tier Eligible)  
   - **Key Pair**: Select or create a new one  
   - **Security Group**:  
     - Allow **SSH (port 22)**
     - Allow **HTTP (port 80)**  
   - **Storage**: Keep default (8GB)  
4. Click **Launch** and wait for the instance to be ready.  

## **2️⃣ Connecting to EC2 via SSH/Putty**
Once the instance is running:  
```access it via putty or ssh
for ssh: ssh -i <your-key.pem> ec2-user@<your-ec2-ip>
for putty: copy the Public IP into putty interface and authenticate using .ppk

3️⃣ Installing Docker on EC2
Run the following commands:
sudo yum update -y
sudo yum install docker -y
sudo service docker start
sudo usermod -aG docker ec2-user

---->Logout and re-login for commands to take effect<----

4️⃣ Installing AWS CLI
Run the following commands:
sudo yum install -y aws-cli
aws --version
aws configure
    -Enter AWS Access Key ID
    -Enter AWS Secret Access Key
    -Set Region (e.g., eu-north-1)
