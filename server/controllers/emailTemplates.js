export const EMAIL_VERIFY_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Email Verification</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f4f9;
    }
    .container {
      max-width: 500px;
      margin: 60px auto;
      background: linear-gradient(145deg, #ffffff, #e6e6e6);
      border-radius: 10px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(to right, #4a00e0, #8e2de2);
      padding: 20px;
      text-align: center;
      color: white;
    }
    .content {
      padding: 30px;
      text-align: center;
    }
    .otp-box {
      background-color: #f0f0f0;
      margin: 20px auto;
      padding: 15px 20px;
      border-radius: 8px;
      font-size: 22px;
      font-weight: bold;
      letter-spacing: 2px;
      color: #4a00e0;
      display: inline-block;
    }
    .footer {
      font-size: 13px;
      color: #666;
      padding: 20px;
      text-align: center;
    }
    .highlight {
      color: #4a00e0;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Email Verification</h2>
    </div>
    <div class="content">
      <p>Hello,</p>
      <p>You are almost there! Please verify your account associated with the email <span class="highlight">{{email}}</span>.</p>
      <p>Use the OTP below to complete verification:</p>
      <div class="otp-box">{{otp}}</div>
      <p>This OTP is valid for 24 hours.</p>
    </div>
    <div class="footer">
      If you didn’t request this, you can safely ignore this email.
    </div>
  </div>
</body>
</html>
`;


export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Reset</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f3f5f9;
    }
    .container {
      max-width: 500px;
      margin: 60px auto;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    }
    .header {
      background: linear-gradient(to right, #FF512F, #DD2476);
      padding: 20px;
      text-align: center;
      color: white;
    }
    .content {
      padding: 30px;
      text-align: center;
    }
    .otp-box {
      background-color: #ffe5ec;
      margin: 20px auto;
      padding: 15px 20px;
      border-radius: 8px;
      font-size: 22px;
      font-weight: bold;
      letter-spacing: 2px;
      color: #DD2476;
      display: inline-block;
    }
    .footer {
      font-size: 13px;
      color: #777;
      padding: 20px;
      text-align: center;
    }
    .highlight {
      color: #DD2476;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Password Reset Request</h2>
    </div>
    <div class="content">
      <p>We received a password reset request for the account: <span class="highlight">{{email}}</span>.</p>
      <p>Please use the following OTP to reset your password:</p>
      <div class="otp-box">{{otp}}</div>
      <p>This OTP is valid for 15 minutes.</p>
    </div>
    <div class="footer">
      Didn’t request this? You can ignore this email safely.
    </div>
  </div>
</body>
</html>
`;
