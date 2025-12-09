<template>
    <div class="contact">
  <div class="contact-page">
    <h1>📢 Complaint & Support</h1>
    <p>If you have any complaint or issue, please reach out to us using the following contact details.</p>

    <div class="contact-info">
      <div class="info-item">
        <h3>📧 Email</h3>
        <p>mazarkhosa518@gmail.com</p>
      </div>

      <div class="info-item">
        <h3>📞 Phone</h3>
        <p>+92 3130784529</p>
      </div>

      <div class="info-item">
        <h3>🏠 Address</h3>
        <p>Resto Support Office, Main Street, Lahore, Pakistan</p>
      </div>

      <div class="info-item">
        <h3>🕒 Office Hours</h3>
        <p>Monday to Saturday — 9:00 AM to 6:00 PM</p>
      </div>
    </div>

    <p class="thankyou">🙏 We appreciate your feedback and will resolve your issue as soon as possible.</p>
  </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

.contact {
  background: linear-gradient(to bottom right, #deb887, #f5deb3);
  min-height: 10vh;
  padding: 40px 20px;
}

.contact-page {
  max-width: 600px;
  margin: 60px auto;
  padding: 30px;
  text-align: center;
  border-radius: 12px;
  background-color: beige;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.contact-info {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-item {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  text-align: left;
}

.info-item h3 {
  margin-bottom: 5px;
  color: black;
}

.info-item p {
    margin-left: 45px;
}

.thankyou {
  margin-top: 30px;
  font-weight: bold;
  color: #2c3e50;
}
</style>
