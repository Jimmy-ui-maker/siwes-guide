import mongoose, { Schema, model, models } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const AdamawaSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Adamawa"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Demsa",
        "Fufure",
        "Ganye",
        "Girei",
        "Gombi",
        "Guyuk",
        "Hong",
        "Jada",
        "Lamurde",
        "Madagali",
        "Maiha",
        "Mayo-Belwa",
        "Michika",
        "Mubi North",
        "Mubi South",
        "Numan",
        "Shelleng",
        "Song",
        "Toungo",
        "Yola North",
        "Yola South",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const AbiaSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Abia"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Aba North",
        "Abia South",
        "Isiala Ngwa North",
        "Isiala Ngwa South",
        "Ukwa West",
        "Ukwa East",
        "Obingwa",
        "Ikwuano",
        "Bende",
        "Arochukwu",
        "Ohafia",
        "Isuikwuato",
        "Umuahia North",
        "Umuahia South",
        "Ugwunagbo",
        "Osisioma",
        "Nnochi",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AkwaIbomSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["AkwaIbom"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Abak",
        "Eastern Obolo",
        "Eket",
        "Esit Ekit",
        "Essien Udim",
        "Etim Ekpo",
        "Etinan",
        "Ibeno",
        "Ibesikpo Asutan",
        "Ibiono Ibom",
        "Ika",
        "Ikoro",
        "Ikot Abasi",
        "Ikot Ekpene",
        "Ini",
        "Itu",
        "Mbo",
        "Mkpat",
        "Enin",
        "Nsit Atai",
        "Nsit Ibom",
        "Nsit ubium",
        "Obot Akara",
        "Okoro",
        "Onna",
        "Oron",
        "Oruk Anam",
        "Udung Uko",
        "Ukanafun",
        "Uruan",
        "Urue-Offong",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const AnambaraSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Anambara"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Anambara East",
        "Anambara West",
        "Ayemelum",
        "Ogbaru",
        "Onoitsha North",
        "Onoitsha South",
        "Oyi",
        "IAkwa North",
        "IAkwa South",
        "Dunukofia",
        "Anaocha",
        "Idemili North",
        "Idemili South",
        "Njikoka",
        "Aguata",
        "Ekwusigo",
        "Ihiala",
        "Nnewi North",
        "Nnewi South",
        "Orumba North",
        "Orumba South",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BauchiSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Bauchi"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Alkaleri",
        "Bauchi Bogoro",
        "Dambam",
        "Barazo",
        "Dass",
        "Gamawa",
        "Ganjuwa",
        "Giade",
        "Itas Gadau",
        "Katagum",
        "Kirfi",
        "Jama'are",
        "Missau",
        "Ningi",
        "Shira",
        "Tafawa Balewa",
        "Toro",
        "Warji",
        "Zaki",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const BayelsaSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Bayelsa"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Brass",
        "Ekeremor",
        "Kolokuma/Opokuma",
        "Nembe",
        "Ogbia",
        "Sagbama",
        "South Ijaw",
        "Yenagoa",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const BenueSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Benue"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Ado",
        "Agatu",
        "Apa",
        "Buruku",
        "Gboko",
        "Guma",
        "Gwer East",
        "Gwer West",
        "Katsina-Ala",
        "Konshisha",
        "Kwande",
        "Logo",
        "Makurdi",
        "Obi",
        "Ogbadibo",
        "Ohimini",
        "Oju",
        "Okpokwu",
        "Otukpo",
        "Tarka",
        "Ukum",
        "Ushongo",
        "Vandeikya",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BornoSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Borno"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Abadam",
        "Askira-Uba",
        "Bama",
        "Bayo",
        "Biyu",
        "Chibok",
        "Damboa",
        "Dikwa",
        "Gubio Guzamala Gwoza Hawul",
        "Jere",
        "Kaga",
        "Kala/Balge",
        "Kondunga",
        "Kukawa",
        "Kwaya",
        "Kusar",
        "Maya",
        "Magumeri",
        "Maiduguri",
        "Marte",
        "Mobbar",
        "Monguno",
        "Ngala",
        "Nganzai",
        "Shani",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CrossRiverSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["CrossRiver"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Abi",
        "Akamkpa",
        "Akpabuyo",
        "Bakassi",
        "Bekwara",
        "Biase",
        "Boki",
        "Calabar Municipal",
        "Calabar South",
        "Etung",
        "Kom",
        "Obanliku",
        "Obubra",
        "Obudu",
        "Odukpani",
        "Ogaja",
        "Yakuurr",
        "Yala",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const DeltaSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Delta"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Aniocha South",
        "Anioha",
        "Bomadi",
        "Burutu",
        "Ethiope West",
        "Ethiope East",
        "Ika South",
        "Ika North-East",
        "Isoko South",
        "Isoko North",
        "Ndokwa East",
        "Ndokwa West",
        "Okpe",
        "Oshimili North",
        "Oshimili South",
        "Patani",
        "Sapele",
        "Udu",
        "Ughelli South",
        "Ughelli North",
        "Ukwuani",
        "Uviwie",
        "Warri Central",
        "Warri North",
        "Warri South",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const EbonyiSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Ebonyi"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Abakaliki",
        "Afikpo South",
        "Afikpo North",
        "Ebonyi",
        "Ezza",
        "Ezza South",
        "Ikwo",
        "Ishielu",
        "Ivo",
        "Ohaozara",
        "Ohaukwu",
        "Onicha",
        "Izzi",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const EdoSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Edo"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Akoko-Edo",
        "Egor",
        "Esan Central",
        "Esan North-East",
        "Esan South-East",
        "Esan West",
        "Etsako Central",
        "Etsako East",
        "Etsako West",
        "Igueben",
        "Ikpoba-Okha",
        "Oredo",
        "Orhonmwon",
        "Ovia North-East",
        "Ovia South-West",
        "Owan East",
        "Owan West",
        "Uhunmwonde",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const EkitiSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Ekiti"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Ado-Ekiti",
        "Efon",
        "Ekiti West",
        "Ikole",
        "Ise/Orun",
        "Ikere",
        "Ekiti East<",
        "Emure",
        "Ilejemeje",
        "Moba",
        "Oye",
        "Ekiti South-West",
        "Ido-Osi",
        "Irepodun/Ifelodun",
        "Aiyekiri",
        "Ijero",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const EnuguSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Enugu"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Awgu",
        "Aninri",
        "Enugu East",
        "Enugu South",
        "Enugu North",
        "Ezeagu",
        "Igbo-Eze North",
        "Igbo-Eze South",
        "Igbo-Etiti",
        "Isi-Uzo",
        "Nkanu East",
        "Nkanu West...",
        "Nsuka",
        "Oji River",
        "Undenu",
        "Uzo Uwani",
        "Udi",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const GombeSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Gombe"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Akko",
        "Balanga",
        "Billiri",
        "Dukku",
        "Dunakaye",
        "Gombe",
        "kaltungo",
        "Kwami",
        "Nafada/Bajoga",
        "Shomgom",
        "Yamaltu/Deba",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ImoSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Imo"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Aboh-Mbaino",
        "Ahiazu-Mbaise",
        "Ehime-Mbaino",
        "Ezinhite",
        "Ideato North",
        "Ideato South",
        "Ihitte/Uboma",
        "Ikeduru",
        "Isiala",
        "Isu",
        "Mbaitoli",
        "Ngor Okpala",
        "Njaba",
        "Nwangele",
        "Nkwere",
        "Obowo",
        "Aguta",
        "Ohaji Egbema",
        "Okigwe",
        "Onuimo",
        "Orlu",
        "Orsu",
        "Oru West",
        "Oru",
        "Owerri North",
        "Owerri South",
        "Egor",
        "Egor",
        "Egor",
        "Egor",
        "Egor",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const JigawaSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Jigawa"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Uyo",
        "Babura",
        "Birnin-Kudu",
        "Birninwa",
        "Buji",
        "Dutse",
        "Garki",
        "Gagarawa",
        "Gumel",
        "Guri",
        "Gwaram",
        "Gwiwa",
        "Hadejia",
        "Jahun",
        "Kafin-Hausa",
        "Kaugama",
        "Kazaure",
        "Kiri-Kasamma",
        "Birnin-Magaji",
        "Maigatari",
        "Malamaduri",
        "Miga",
        "Ringim",
        "Roni",
        "Sule Tankarka",
        "Taura",
        "Yankwasi",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const KadunaSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Kaduna"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Birini-Gwari",
        "Chukun",
        "Giwa",
        "Kajuru",
        "Igabi",
        "Ikara",
        "Jaba",
        "Jema'a",
        "Kachia",
        "Kaduna North",
        "Kaduna South",
        "Kagarko",
        "Kaura",
        "Kauru",
        "Kudan",
        "Lere",
        "Makarfi",
        "Sabon-gari",
        "Sanga",
        "Soba",
        "Zangon-Kataf",
        "Zaria",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const KanoSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Kano"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Ajingi",
        "Albasu",
        "Bebeji",
        "Bichi",
        "Bunkure",
        "Dala",
        "Dambatta",
        "Dawakin Kudu",
        "Dawakin Tofa",
        "Doguwa",
        "Fagge",
        "Gabasawa",
        "Garko",
        "Garun Mallam",
        "Gaya",
        "Gezawa",
        "Gwale",
        "Gwarzo",
        "Kabo",
        "Kano Municipal",
        "Karaye",
        "Kibiya",
        "Kiru",
        "Kumbsto",
        "Kunch",
        "Kura",
        "Maidobi",
        "Makoda",
        "Minjibir Nasarawa",
        "Rano",
        "Rimin Gado",
        "Rogo",
        "Shanono",
        "Sumaila",
        "Takai",
        "Tarauni",
        "Tofa",
        "Tsanyawa",
        "Tudun Wada",
        "Ungogo",
        "Warawa",
        "Wudil",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const KatsinaSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Katsina"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Bakori",
        "Batagarawa",
        "Batsari",
        "Baure",
        "Bindawa",
        "Charanchi",
        "Dan Musa",
        "Dandume",
        "Danja",
        "Daura",
        "Dutsen",
        "Dutsen-Ma",
        "Faskari",
        "Funtua",
        "Ingawa",
        "Jibia",
        "Kafur",
        "Kaita",
        "Kankara",
        "Kankiya",
        "Katsina",
        "Furfi",
        "Kusada",
        "Mai Aduwa",
        "Malumfashi",
        "Mani",
        "Mashi",
        "Matazu",
        "Musawa",
        "Rimi",
        "Sabuwa",
        "Safana",
        "Sandumu",
        "Zango",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const KebbiSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Kebbi"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Aleiro",
        "Arewa-Dandi",
        "Argungu",
        "Augie",
        "Bagudo",
        "Birnin Kebbi",
        "Bunza",
        "Dandi",
        "Fakai",
        "Gwandu",
        "Jega",
        "Kalgo",
        "Koko/Besse",
        "Maiyama",
        "Ngaski",
        "Sakaba",
        "Shanga",
        "Suru",
        "Wasagu/Danko",
        "Yauri",
        "Zuru",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const KogiSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Kogi"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Adavi",
        "Ajaokuta",
        "Ankpa",
        "Bassa",
        "Dekina",
        "Ibaji",
        "Idah",
        "Igalamela-Odulu",
        "Ijumu",
        "Kabba/Bunu",
        "Koton Karfe",
        "Lokoja",
        "Mopa-Muro",
        "Ofu",
        "Ogori/Magongo",
        "Okehi",
        "Okene",
        "Olamaboro",
        "Omala",
        "Yagba East",
        "Yagba West",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const KwaraSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Kwara"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Asa",
        "Baruten",
        "Ede",
        "Ekiti",
        "Ifelodun",
        "Ilorin South",
        "Ilorin West",
        "Ilorin East",
        "Irepodun",
        "Isin",
        "Kaiama",
        "Moro",
        "Offa",
        "Oke Ero",
        "Oyun",
        "Pategi",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const LagosSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Lagos"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Agege",
        "Alimosho-Ifelodun",
        "Alimosho",
        "Amuwo-Odofin",
        "Apapa",
        "Badagry",
        "Epa",
        "Eti-Osa",
        "Ibeju-Lekki",
        "Ifako-Ijaye",
        "Ikeja",
        "Ikorodu",
        "Kosofe",
        "Lagos Island",
        "Lagos Mainland",
        "Mushin",
        "Ojo",
        "Oshodi-Isolo",
        "Shomolu",
        "Surulere",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const NasarawaSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Nasarawa"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Akwanga",
        "Awe",
        "Doma",
        "Karu",
        "keana",
        "Kefffi",
        "Kokona",
        "lafia",
        "Nasarawa",
        "Nasarawa/Eggon",
        "Obi",
        "Toto",
        "Wamba",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const NigerSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Niger"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Agaie",
        "Agwara",
        "Bida",
        "Borgu",
        "Bosso",
        "Chanchanga",
        "Edati",
        "Gbako",
        "Gurara",
        "Kitcha",
        "Kontagora",
        "Lapai",
        "Lavun",
        "Magama",
        "Mariga",
        "Mashegu",
        "Minna",
        "Mokwa",
        "Muya",
        "Paiko",
        "Rafi",
        "Rijau",
        "Shiroro",
        "Suleja",
        "Tafa",
        "Wushishi",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const OgunSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Ogun"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Abeokuta South",
        "Abeokuta North",
        "Ado-Odo/Otta",
        "Agbado South",
        "Agbado North",
        "Ewekoro",
        "Idarapo",
        "Ifo",
        "Ijebu East",
        "Ijebu North",
        "Ikenne",
        "Ilugun Alaro",
        "Imeko Afon",
        "Ipokia",
        "Obafemi/Owode",
        "Odeda",
        "Odogbolu",
        "Ogun Aterside",
        "Sagamu",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const OndoSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Ondo"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Akoko North",
        "Akoko North-East",
        "Akoko South-East",
        "Bomadi",
        "Akoko South",
        "Akure North",
        "Akure",
        "Idanre",
        "Ifedore",
        "Ese Odo",
        "Ilaje",
        "Ilaje Oke-Igbo",
        "Irele",
        "Odigbo",
        "Okitipupa",
        "Ondo",
        "Ondo East",
        "Ose",
        "Owo",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const OsunSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Osun"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Atakumosa West",
        "Atakumosa East",
        "Ayeda-Ade",
        "Ayedire",
        "Bolawaduro",
        "Boripe",
        "Ede",
        "Ede North",
        "Egbedore",
        "Ejigbo",
        "Ife North",
        "Ife Central",
        "Ife South",
        "Ife East",
        "Ifedayo",
        "Ifelodun",
        "Ilesha West",
        "Ila-Orangun",
        "Ilesah East",
        "Irepodun",
        "Irewole",
        "Isokan",
        "Iwo",
        "Obokun",
        "Odo-Otin",
        "Olaoluwa",
        "Olurunda",
        "Oriade",
        "Orolu",
        "Osogbo",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const OyoSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Oyo"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Afijio",
        "Akinyele",
        "Attba",
        "Atigbo",
        "Egbeda",
        "Ibadan North",
        "Ibadan Central",
        "Ibadan South-East",
        "Ibadan South-West",
        "Ibarapa East",
        "Ibarapa North",
        "Ido",
        "Ifedapo",
        "Ifeloju",
        "Irepo",
        "Iseyin",
        "Itesiwaju",
        "Iwwajowa",
        "Iwajowa Olorunshogo",
        "Kajola",
        "Lagule",
        "gbamosho North",
        "gbamosho South",
        "Ogo Oluwa",
        "Oluyole",
        "Ona-Ara",
        "Orelope",
        "Orire",
        "Oyo East",
        "Oyo West",
        "Saki East",
        "Saki West",
        "Surulere",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const PlateauSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Plateau"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Barkin-Ladi",
        "Bassa",
        "Bokkos",
        "Jos North",
        "Jos East",
        "Jos South",
        "Kanam",
        "Kanke",
        "Quaan Pan",
        "Langtang North",
        "Langtang South",
        "Mangu",
        "Mikang",
        "Pankshi",
        "Shendam",
        "Wase",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const RiversSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Rivers"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Abua/Odual",
        "Ahoada East",
        "EgorAhoada West",
        "Akuku Toru",
        "Andoni",
        "Asari Toru",
        "Bonny",
        "Degema",
        "Eleme",
        "Emohua",
        "Etche",
        "Gokana",
        "Ikwerre",
        "Oyigbo",
        "Khana",
        "Obio/Akpor",
        "Ogba East/Edoni",
        "Ogu/Bolo",
        "Okrika",
        "Omumma",
        "Opobo/Nkoro",
        "Oyigbo",
        "Port-Harcourt",
        "Tai",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const SokotoSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Sokoto"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Binji",
        "Bodinga",
        "Dange-Shuni",
        "Gada",
        "Garonyo",
        "Gudu",
        "Gwadabawa",
        "Illela",
        "Isa",
        "Kebbe",
        "Kware",
        "Rabah",
        "Sabon-Birni",
        "Shagari",
        "Silame",
        "Sokoto South",
        "Sokoto North",
        "Tambuwal",
        "Tangaza",
        "Tureta",
        "Wamakko",
        "Wurno",
        "Yabo",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const TarabaSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Taraba"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Ardo-Kola",
        "Bali",
        "Gashaka",
        "Gassol",
        "Ibi",
        "Jalingo",
        "K/Lamido",
        "Kurmi",
        "Lan",
        "Sardauna",
        "Tarum",
        "Ussa",
        "Wukari",
        "Zing",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const YobeSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Yobe"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Borsari",
        "Damaturu",
        "Fika",
        "Fune",
        "Geidam",
        "Gogaram",
        "Gujba",
        "Gulani",
        "Jakusko",
        "Karasuwa",
        "Machina",
        "Nagere",
        "Nguru",
        "Potiskum",
        "Tarmua",
        "Yunusari",
        "Yusufari",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const ZamfaraSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["Zamfara"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Ankah",
        "Bakura",
        "Birnin-Magaji-Kiyaw",
        "Bukkuyum",
        "Bugudu",
        "Gummi",
        "Gusau",
        "kaura-Namoda",
        "Maradun",
        "Maru",
        "Shinkafi",
        "Talata-Mafara",
        "Tsafe",
        "Zurmi",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const FCTAbujaSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      enum: ["FCTAbuja"],
    },
    lgas: {
      type: String,
      required: true,
      enum: [
        "Abaji",
        "Abuja Municipal",
        "Bwari",
        "Gwagwalada",
        "Kuje",
        "Kwali",
      ],
    },
    courses: {
      type: String,
      required: true,
      enum: ["Computer", "Biology", "Statistics", "Physics"],
    },
    address: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    secNum: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    weburl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const AdamawaTable =
  models.AdamawaTable || model("AdamawaTable", AdamawaSchema);

export const AbiaTable = models.AbiaTable || model("AbiaTable", AbiaSchema);
export const AkwaIbomTable =
  models.AkwaIbomTable || model("AkwaIbomTable", AkwaIbomSchema);
export const AnambaraTable =
  models.AnambaraTable || model("AnambaraTable", AnambaraSchema);
export const BauchiTable =
  models.BauchiTable || model("BauchiTable", BauchiSchema);
export const BayelsaTable =
  models.BayelsaTable || model("BayelsaTable", BayelsaSchema);
export const BenueTable = models.BenueTable || model("BenueTable", BenueSchema);
export const BornoTable = models.BornoTable || model("BornoTable", BornoSchema);
export const CrossRiverTable =
  models.CrossRiverTable || model("CrossRiverTable", CrossRiverSchema);
export const DeltaTable = models.DeltaTable || model("DeltaTable", DeltaSchema);
export const EbonyiTable =
  models.EbonyiTable || model("EbonyiTable", EbonyiSchema);
export const EdoTable = models.EdoTable || model("EdoTable", EdoSchema);
export const EkitiTable = models.EkitiTable || model("EkitiTable", EkitiSchema);
export const EnuguTable = models.EnuguTable || model("EnuguTable", EnuguSchema);
export const GombeTable = models.GombeTable || model("GombeTable", GombeSchema);
export const ImoTable = models.ImoTable || model("ImoTable", ImoSchema);
export const JigawaTable =
  models.JigawaTable || model("JigawaTable", JigawaSchema);
export const KadunaTable =
  models.KadunaTable || model("KadunaTable", KadunaSchema);
export const KanoTable = models.KanoTable || model("KanoTable", KanoSchema);
export const KatsinaTable =
  models.KatsinaTable || model("KatsinaTable", KatsinaSchema);
export const KebbiTable = models.KebbiTable || model("KebbiTable", KebbiSchema);
export const KogiTable = models.KogiTable || model("KogiTable", KogiSchema);
export const KwaraTable = models.KwaraTable || model("KwaraTable", KwaraSchema);
export const LagosTable = models.LagosTable || model("LagosTable", LagosSchema);
export const NasarawaTable =
  models.NasarawaTable || model("NasarawaTable", NasarawaSchema);
export const NigerTable = models.NigerTable || model("NigerTable", NigerSchema);
export const OgunTable = models.OgunTable || model("OgunTable", OgunSchema);
export const OndoTable = models.OndoTable || model("OndoTable", OndoSchema);
export const OsunTable = models.OsunTable || model("OsunTable", OsunSchema);
export const OyoTable = models.OyoTable || model("OyoTable", OyoSchema);
export const PlateauTable =
  models.PlateauTable || model("PlateauTable", PlateauSchema);
export const RiversTable =
  models.RiversTable || model("RiversTable", RiversSchema);
export const SokotoTable =
  models.SokotoTable || model("SokotoTable", SokotoSchema);
export const TarabaTable =
  models.TarabaTable || model("TarabaTable", TarabaSchema);
export const YobeTable = models.YobeTable || model("YobeTable", YobeSchema);
export const ZamfaraTable = models.ZamfaraTable || model("ZamfaraTable", ZamfaraSchema);
export const FCTAbujaTable =
  models.FCTAbujaTable || model("FCTAbujaTable", FCTAbujaSchema);
