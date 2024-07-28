import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ShowResearch = () => {
  const checkToken = localStorage.getItem('token');
  if (!checkToken) {
    window.location.href = '/login';
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            หัวข้องานวิจัย : การศึกษาประสิทธิภาพเชิงเปรียบเทียบของ Load Balancer HAProxy Nginx และ Traefik
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ความคืบหน้างานวิจัย : อยู่ระหว่างการทำการทดสอบตามที่ได้ออกแบบระบบ
          </Typography>
          <Typography variant="body2" color="text.secondary">
            รายละเอียดงานวิจัย : <br/>
            การวิจัยนี้ได้ทำการศึกษาเกี่ยวกับประสิทธิภาพของซอฟแวร์ที่ทำหน้าที่กระจายโหลด ได้แก่ HAProxy, Nginx และ Traefik เพื่อทดสอบเปรียบเทียบถึงประสิทธิภาพระหว่างกันและหาความเหมาะสมที่นำไปใช้กับระบบเว็บแอปพลิเคชันที่มีการร้องขอใช้ข้อมูลจากเซิร์ฟเวอร์ โดยใช้การจำลองปริมาณในการร้องขอในหลายๆ ปริมาณที่แตกต่างกันในช่วงเวลาเดียวกัน เพื่อได้ผลลัพธ์ในแง่ของอัตราการตอบสนองและความถูกต้องของแต่ละซอฟแวร์ โดยหวังว่าจะช่วยให้ผู้สนใจสามารถเลือกใช้งานได้อย่างเหมาะสมกับพฤติกรรมการใช้งานเว็บแอปพลิเคชัน
          </Typography>


        </CardContent>
        <a href="/">Home</a>
      </Card>
    </div>
  );
};

export default ShowResearch;
