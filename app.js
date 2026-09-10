const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family: Arial; text-align: center; padding: 50px; background: #1a1a2e; color: white;">
        <h1>🚀 Full Stack DevOps Project</h1>
        <h2>✅ Deployment Successful!</h2>
        <p>Infrastructure by Terraform</p>
        <p>Configuration by Ansible</p>
        <p>CI/CD by Jenkins</p>
        <p>Containerized by Docker</p>
        <p style="color: #00ff88;">App is running on AWS EC2!</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date(),
    tools: ['Terraform', 'Ansible', 'Jenkins', 'Docker']
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
<- name: Setup DevOps webhook test -->
