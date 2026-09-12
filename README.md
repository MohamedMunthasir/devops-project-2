# 🚀 Full Stack DevOps Infrastructure Project

## Project Overview

A complete end-to-end DevOps infrastructure 
project that covers the entire DevOps lifecycle —
from infrastructure provisioning to application 
monitoring on AWS cloud!

---

## 🏗️ Architecture

```
Developer Laptop
      │
      │ terraform apply
      ▼
AWS Infrastructure (VPC, EC2, IAM, SG)
      │
      │ Ansible playbook
      ▼
Server Configuration
(Java, Docker, Jenkins, Node.js installed)
      │
      │ git push
      ▼
GitHub Repository
      │
      │ Webhook triggers
      ▼
Jenkins CI/CD Pipeline
      │
      ├── Pull code
      ├── Install dependencies
      ├── Run tests
      ├── Build Docker image
      └── Deploy container
                │
                ▼
        Kubernetes (k3s)
        3 pods running
        Auto-healing ✅
                │
                ▼
        Application Live!
        port 3000
                │
                ▼
        Prometheus + Grafana
        Real-time monitoring ✅
```

---

## 🛠️ Tools & Technologies

| Tool | Purpose |
|------|---------|
| AWS EC2 | Cloud server |
| AWS VPC | Private network |
| AWS IAM | Access management |
| AWS Security Groups | Firewall |
| Terraform | Infrastructure as Code |
| Ansible | Configuration Management |
| Jenkins | CI/CD Automation |
| Docker | Containerization |
| Kubernetes (k3s) | Container Orchestration |
| Prometheus | Metrics Collection |
| Grafana | Monitoring Dashboards |
| GitHub | Source Control + Webhooks |
| Node.js | Web Application |
| Linux | Server OS |
| Shell Script | Automation |

---

## 📋 Project Phases

### Phase 1: Terraform — Infrastructure as Code
```
Created with ONE command (terraform apply):
✅ VPC (10.0.0.0/16)
✅ Public Subnet (10.0.1.0/24)
✅ Internet Gateway
✅ Route Table
✅ Security Group (ports 22,8080,3000,9090,3001)
✅ IAM Role with S3, CloudWatch, ECR permissions
✅ EC2 Instance (Ubuntu, t3.micro, 20GB)
```

### Phase 2: Ansible — Configuration Management
```
Installed automatically with ONE command:
✅ Java 21 (Amazon Corretto)
✅ Git
✅ Docker
✅ Node.js + npm
✅ Jenkins
✅ All services configured and started
```

### Phase 3: Jenkins CI/CD Pipeline
```
6-stage automated pipeline:
✅ Stage 1: Checkout code from GitHub
✅ Stage 2: Install Node.js dependencies
✅ Stage 3: Run automated tests
✅ Stage 4: Build Docker image
✅ Stage 5: Deploy Docker container
✅ Stage 6: Verify deployment
→ Triggered automatically by GitHub webhook!
→ Completes in 39 seconds!
```

### Phase 4: Kubernetes (k3s)
```
Container orchestration:
✅ 3 replicas of app running
✅ Self-healing (auto restarts crashed pods)
✅ Load balancing between pods
✅ NodePort service (port 30000)
```

### Phase 5: Prometheus + Grafana
```
Real-time monitoring:
✅ Prometheus collecting metrics every 15s
✅ Node Exporter sending server metrics
✅ Grafana dashboards showing:
   - CPU usage
   - Memory usage
   - Disk usage
   - Network traffic
```

---

## 📁 Project Structure

| File/Folder | Purpose |
|-------------|---------|
| `main.tf` | Terraform infrastructure code |
| `outputs.tf` | Terraform output values |
| `ansible-project/` | Ansible playbooks |
| `app.js` | Node.js application |
| `package.json` | App dependencies |
| `Dockerfile` | Docker container config |
| `Jenkinsfile` | CI/CD pipeline definition |
| `k8s/deployment.yaml` | Kubernetes deployment |
| `k8s/service.yaml` | Kubernetes service |

---

## 🚀 How to Run This Project

### Prerequisites
```
✅ AWS Account
✅ GitHub Account
✅ Terraform installed
✅ AWS CLI configured
```

### Step 1: Clone Repository
```bash
git clone https://github.com/MohamedMunthasir/devops-project-2.git
cd devops-project-2
```

### Step 2: Create Infrastructure with Terraform
```bash
cd terraform
terraform init
terraform plan
terraform apply
```

### Step 3: Configure Server with Ansible
```bash
cd ansible-project
ansible-playbook -i inventory.ini setup-server.yml
```

### Step 4: Access Jenkins
```
http://EC2_PUBLIC_IP:8080
```

### Step 5: Create Pipeline Job
```
Jenkins → New Item → Pipeline
→ Connect to GitHub repo
→ Build Now
→ App deployed automatically!
```

### Step 6: Access Application
```
http://EC2_PUBLIC_IP:3000
```

### Step 7: Access Monitoring
```
Prometheus: http://EC2_PUBLIC_IP:9090
Grafana:    http://EC2_PUBLIC_IP:3001
```

---

## 📊 Results

| Metric | Before | After |
|--------|--------|-------|
| Infrastructure setup | 2 hours | 2 minutes |
| Server configuration | 2 hours | 5 minutes |
| Deployment time | Hours | 39 seconds |
| Manual work | 100% | 0% |
| Monitoring | None | Real-time |
| Self-healing | None | Automatic |

---

## 💡 Key Learnings

```
1. Infrastructure as Code with Terraform
2. Configuration Management with Ansible
3. CI/CD pipeline automation with Jenkins
4. Docker containerization best practices
5. Kubernetes container orchestration
6. Real-time monitoring with Prometheus
7. Beautiful dashboards with Grafana
8. AWS cloud architecture
9. Linux server management
10. DevOps best practices
```

---

## 🔮 Future Improvements

```
→ Add Terraform remote state (S3 backend)
→ Add multiple environments (dev/staging/prod)
→ Add AWS EKS instead of k3s
→ Add Slack notifications
→ Add automated rollback
→ Add SSL/TLS certificates
→ Add Blue/Green deployment
→ Add AWS CloudWatch integration
```

---

## 👨‍💻 Author

**Mohamed Munthasir**
- LinkedIn: www.linkedin.com/in/mohamed-munthasir-b994a62b2
- GitHub: github.com/MohamedMunthasir
  

---

⭐ If you found this helpful please 
give it a star on GitHub!
