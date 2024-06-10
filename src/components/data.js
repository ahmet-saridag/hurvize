import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { GoLaw } from "react-icons/go";
import { FaPassport } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineFamilyRestroom, MdOutlineChat } from "react-icons/md";
import { TbHomeSearch } from "react-icons/tb";
import { FaMoneyCheck } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

import benefitOneImg from "../../public/img/assets/hangi-konularda-hizmet.jpeg";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Bütün süreç boyunca yanınızdayız",
  desc: "Vize başvurusundan taşınma ve işe girmeye kadar her adımda yanınızdayız.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Göç ve Hukuk Danışmanlığı",
      desc: "Vize başvuruları, çalışma vizeleri ve aile birleşimi konularında uzman danışmanlık hizmetleri sunuyoruz.Vize başvuruları, çalışma vizeleri ve aile birleşimi konularında uzman danışmanlık hizmetleri sunuyoruz.",
      icon: <GoLaw />,
    },
    {
      title: "Vize Başvuru İşlemleri",
      desc: "Vize başvurularınız için güvenilir ve profesyonel danışmanlık hizmetleri.",
      icon: <FaPassport />,
    },
    {
      title: "Çalışma Vizesi",
      desc: "Çalışma vizesi işlemlerinizde uzman kadromuzla yanınızdayız.",
      icon: <MdOutlineWorkOutline />,
    },
    {
      title: "Aile Birleşimi",
      desc: "Aile birleşimi vizesi başvurularında hızlı ve etkili çözümler.",
      icon: <MdOutlineFamilyRestroom />,
    },
  ],
};

const benefitTwo = {
  title: "KAPSAMLI HİZMETLER",
  desc: "Ekstra Hizmetlerimiz",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Danışma",
      desc: "İhtiyaçlarınızı belirlemek ve size en uygun çözümleri sunmak için ilk danışmanlık hizmeti.",
      icon: <MdOutlineChat />,
    },
    {
      title: "Taşınma Hizmetleri",
      desc: "Yeni bir ülkeye taşınma sürecinizde kapsamlı destek ve rehberlik sağlıyoruz..",
      icon: <TbHomeSearch />,
    },
    {
      title: "Yatırım Yoluyla Oturma İzni",
      desc: "Yatırım yaparak oturma izni almanız için profesyonel danışmanlık hizmeti sunuyoruz.",
      icon: <FaMoneyCheck />,
    },
    {
      title: "Alman Vatandaşlık Hukuku",
      desc: "Alman vatandaşlık yasaları hakkında detaylı bilgi ve danışmanlık hizmeti sağlıyoruz.",
      icon: <IoIosPeople />,
    },
  ],
};

export { benefitOne, benefitTwo };
