import { Brand } from 'src/app/models/base.model';

export enum Products {
  Navigation = 'navigation',
  LifeSaving = 'life-saving',
  FireFighting = 'fire-fighting',
  Indicators = 'indicators',
  Electrics = 'electrics',
}

export const ProductsNameMap = {
  [Products.Navigation]: 'Navigation and Communication Equipment',
  [Products.LifeSaving]: 'Life Saving Equipment',
  [Products.FireFighting]: 'Fire Fighting Equipment',
  [Products.Indicators]: 'Distress Signals, Signs & Flags',
  [Products.Electrics]: 'Marine Electrical Products',
};

export const MajorBrands: Brand[] = [
  {
    name: 'Xylem',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fxylem.png?alt=media&token=62c29d1a-dc4a-4200-8580-076f4e09578d',
  },
  {
    name: 'BTICINO',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fbticino.png?alt=media&token=71064120-e2de-4d8d-9bbc-9f5309a31de1',
  },
  {
    name: 'OPTIMA Batteries',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Foptima.png?alt=media&token=a631e82f-7f5f-4ad0-adfc-805b565cf283',
  },
  {
    name: 'Cantalupi Lighting',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fcantalupi.png?alt=media&token=00e7bc4a-9411-4ba7-b0ea-41347070310d',
  },
  {
    name: 'CAT',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fcaterpillar.jpg?alt=media&token=01234e56-71e7-41a7-bbc4-b9d8ccb89d56',
  },
  {
    name: 'Cummins Marine',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fcummins.png?alt=media&token=9e0538f4-3302-4bca-a015-d514bf41c447',
  },
  {
    name: 'DOMETIC',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fdometic.png?alt=media&token=b4cf38d0-b0cf-4237-8fc9-ba5887903dfe ',
  },
  {
    name: 'ICOM',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Ficom.png?alt=media&token=e9f0a17d-7a61-4429-b825-fd2e78107b27',
  },
  {
    name: 'JABSCO',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fjabsco.png?alt=media&token=645e8579-e870-4c7c-b1f8-a48d4c455f8e',
  },
  {
    name: 'Motorola',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fmotorola.jpg?alt=media&token=b9d01f7c-ca4c-4da2-acad-bcb39024a24a',
  },
  {
    name: 'Quick Marine Lighting',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fquick.png?alt=media&token=8da0aa9d-335b-46ce-96e2-ee980a0bd896',
  },
  {
    name: 'SAILOR',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fsailor.png?alt=media&token=14061f73-8631-4e73-9f64-65133e56ed03',
  },
  {
    name: 'SEASTAR SOLUTIONS',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fseastar.png?alt=media&token=676d0946-dae1-4233-8436-a2f9abdf9d0c',
  },
  {
    name: 'STANDARD HORIZON',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fstandard-horizon.png?alt=media&token=c1b19731-f504-4ed5-9adc-0055f5d5be89',
  },
  {
    name: 'Tyco',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Ftyco.png?alt=media&token=3f11491d-70ae-4858-8912-a87f0c481b57',
  },
];

export const OtherBrands: Brand[] = [
  {
    name: 'Awlgrip',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fawlgrip.png?alt=media&token=7bfe68a8-e8e2-428d-8267-668393793ef0',
  },
  {
    name: 'BAUER COMPRESSORS, INC.',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fbauer.png?alt=media&token=44280740-32c5-437b-b1df-78099189b0ad',
  },
  {
    name: 'COBHAM',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fcobham.png?alt=media&token=87873378-872b-4246-b23b-f676c239658b',
  },
  {
    name: 'FLIR',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fflir.png?alt=media&token=a6067600-5835-410e-98d7-597ce22e2cb4',
  },
  {
    name: 'FUSION',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Ffusion.png?alt=media&token=905a8e69-000a-49e3-af46-99aae886ab02',
  },
  {
    name: 'International Marine Paint',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Finternational.png?alt=media&token=397246bd-e4b0-49db-a2d1-5e09115d715c',
  },
  {
    name: 'Italvipla',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fitalvipla.png?alt=media&token=db5cefbf-37d2-4873-9bd6-6d599f304cf1',
  },
  {
    name: 'JL Audio',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fjl-audio.png?alt=media&token=4acb8946-4485-417c-b926-e251b7413cff',
  },
  {
    name: 'Jotron',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fjotron.jpg?alt=media&token=abec1e97-9a5c-4458-b0e9-7e53fcda8e2c',
  },
  {
    name: 'Japan Radio Company',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fjrc.png?alt=media&token=b16ddfa4-20ef-4bc6-be0f-1d5e84552656',
  },
  {
    name: 'Koden Marine Electronics',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fkoden.png?alt=media&token=248d60ff-d284-44d7-887e-98e2b54327f5',
  },
  {
    name: 'Lowrance',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Flowrance.png?alt=media&token=ae4beda4-ab0f-40d0-b322-ca2e045ca4d5',
  },
  {
    name: 'Lumitec Lighting',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Flumitec.png?alt=media&token=ed01eca4-23e1-467c-addd-cb60e9a4f2cb',
  },
  {
    name: 'Marco',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fmarco.png?alt=media&token=ea568164-0c90-4c3f-89eb-974ba5a5b660',
  },
  {
    name: 'Mase Generators',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fmase.jpg?alt=media&token=80296b52-73ef-485a-b3fc-41e71f54e1a2',
  },
  {
    name: 'MAR-IX',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fmatrix.png?alt=media&token=5f6f7698-f595-445c-b6bc-5772038b6dc5',
  },
  {
    name: 'Mercury Marine',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fmercury.jpg?alt=media&token=7369a2d7-a826-4052-9a44-4b7651bdbd58',
  },
  {
    name: 'PLASTIMO',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fplastimo.png?alt=media&token=d65af72b-c256-4be8-a19d-3f8c4c9a1b39',
  },
  {
    name: 'Polyform US',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fpolyform.jpg?alt=media&token=418be487-4d15-4f95-89c2-2a15a333d2d6',
  },
  {
    name: 'Raymarine',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fraymarine.png?alt=media&token=c9111165-29fe-4ea5-bc78-a28821cf45a5',
  },
  {
    name: 'Simrad Yachting',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fsimrad.png?alt=media&token=d7721855-2210-4dab-a338-2edb5fe32360',
  },
  {
    name: 'Sperry Marine',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fsperry-marine.png?alt=media&token=25128e94-f109-4047-bc49-50cb182e662c',
  },
  {
    name: 'Suzuki Marine',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fsuzuki-marine.png?alt=media&token=95f1160c-e332-4606-b2f3-19fd5f6fb443',
  },
  {
    name: 'Vitrifrigo',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fvitrifrigo.jpg?alt=media&token=3dde1267-d594-4b58-bd89-fa3a4ded93ac',
  },
  {
    name: 'Yamaha',
    logo: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/brands%2Fother%2Fyamaha.jpg?alt=media&token=f55315c9-e457-49ae-9e8b-60cee304d32b',
  },
];

export const ProductsImageMap = {
  [Products.Navigation]: [
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FEPIRB.jpg?alt=media&token=a7e11f15-443e-46f3-9061-e87dbc04d853',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FSART.jpg?alt=media&token=6b795045-5c0b-4e52-8582-511aa256eca9',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FIcom-Handheld-VHF-Marine-Radios.jpg?alt=media&token=bcd8402d-00e5-4adf-812e-41dcd0786435',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FGarmin-GPSMAP-1022.jpg?alt=media&token=87848d9c-e8d5-41e6-91c9-f7709a592d9d',
  ],
  [Products.LifeSaving]: [
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FLIFE%20RAFT.jpg?alt=media&token=f251d5ad-2612-49e6-b1dc-cdc411e61ff7',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FLIFE%20RING.jpg?alt=media&token=450de7e1-8208-44c0-8135-badfa581594c',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FLIFE%20JACKET.jpg?alt=media&token=6c72b766-8af2-4a8f-bd90-4bc0f590fbaf',
  ],
  [Products.FireFighting]: [
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2Ffire-extinguisher.jpg?alt=media&token=ae073db4-7570-4698-b14d-b560b7ed94de',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FFIRE%20HOSE.png?alt=media&token=a6ddf70a-37a7-4e76-a4fd-b0ae4ea4bdff',
  ],
  [Products.Indicators]: [
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FIkarosMOB.jpg?alt=media&token=e1222523-089a-4f39-89f8-dcf787073479',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FLTA.png?alt=media&token=5a3c8086-4d3d-4db2-8d10-24baae2c3d43',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2Fkit-distress-signals-6-to-12-miles.jpg?alt=media&token=26ff8d0e-1ba6-4401-a0e1-9e15e083ae29',
  ],
  [Products.Electrics]: [
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2F17A.jpeg?alt=media&token=d286416a-5f7a-4630-b638-955c3306b30d',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2F12A.jpeg?alt=media&token=c924c47f-ca06-4099-a491-a777ce625e43',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2F135SL.jpg?alt=media&token=1f4b5795-299a-47c0-adce-2dd0fab02451',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FVICTRON.jpg?alt=media&token=c649adb3-0071-47eb-acd2-d68c19696cb2',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FQUCIK.jpg?alt=media&token=bef716f5-b7ec-48bf-a888-b6654745201a',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FQUICK%20WINCH.jpg?alt=media&token=4f24f37a-317e-46a5-b528-3708619037d4',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FBEP.webp?alt=media&token=4fa11751-a45f-43a2-a57f-e6d70bba43e6',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FLUMITEC.jpg?alt=media&token=1e45c3b2-784b-4842-92a4-c9c82c5d3abb',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FJABSCO.jpg?alt=media&token=272b2412-e972-42a6-b229-a020790e2ab9',
    'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/products%2FOPTIMA.webp?alt=media&token=3a9feb10-960f-4b04-ad17-6af4c91fa403',
  ],
};
