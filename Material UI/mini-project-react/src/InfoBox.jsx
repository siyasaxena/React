import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import SunnyIcon from "@mui/icons-material/Sunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import GrainIcon from "@mui/icons-material/Grain";

export default function InfoBox({ info }) {
  const INIT_IMG_URL =
    "https://images.unsplash.com/photo-1662377824580-a540e7728635?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Slo8PLbmJmONDCBRazEkAwLj1LEqLb8AGmG82uyW0uI=";
  const COLD_URL =
    "https://media.istockphoto.com/id/157565659/photo/thermometer-behind-the-frozen-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=jebsXabV8JeW_noupwWNY4RdteXs56Gl1A4kfHXHXSk=";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1675968514495-7f3be70dddd6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhaWwlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const HAIL_URL =
    "https://media.istockphoto.com/id/157375476/photo/big-hailstones.webp?a=1&b=1&s=612x612&w=0&k=20&c=qwJwtIv2FC7YdFl0c7z6VGV9NrYqTdfq54ks0sog1sA=";

  return (
    <div className="InfoBox">
      <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 60 && info.humidity < 80
                ? RAIN_URL
                : info.humidity > 80
                  ? HAIL_URL
                  : info.temp_c > 30
                    ? HOT_URL
                    : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 60 && info.humidity < 80 ? (
                <ThunderstormIcon />
              ) : info.humidity > 80 ? (
                <GrainIcon />
              ) : info.temp_c > 30 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <div>Temperature = {info.temp_c}&deg;C</div>
              <div>Humidity = {info.humidity}</div>
              <p>Wind_kph = {info.wind_kph}</p>
              <p>Localtime = {info.localtime.slice(11)}</p>
              <p>
                The weather can be described as <i>${info.weather}</i> Feels
                Like = {info.feelslike_c}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
