"use client"
import BackgroundImage from "@/lib/components/page/BackgroundImage";
import PageHeader from "@/lib/components/page/PageHeader";
import { paths } from "@/lib/navigation/paths";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <BackgroundImage
        imageSrc="/backgrounds/healthy-food.avif"
        transparency={0.6}
        imageSx={{
          backgroundSize: { xs: "cover", md: "contain" },
          backgroundPosition: "center",
          height: { xs: 350, md: 400 }
        }}
      >
        <PageHeader
          title="be healthy"
          subTitle="welcome to be healthy your beast healthy food restaurant"
          caption="note that the app is in developing stage more pages will be added soon"
          small
          action={
            <Button
              variant="contained"
              size="large"
              LinkComponent={Link}
              href={paths.auth.login}
              endIcon={<LoginRoundedIcon />}
            >
              login
            </Button>
          }
        />
      </BackgroundImage>

    </>
  );
}
