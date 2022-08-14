import { LaptopInformation, MuxStatus, SwitchableGraphicsTechnology } from './LaptopInformation';

const LAPTOP_DATA: LaptopInformation[] = [
  {
    manufacturer: 'Acer',
    modelNumber: 'Helios 300 (2021)',
    cpus: [
      'Intel i7-10750H',
      'Intel i7-11800H'
    ],
    gpus: [
      {
        name: 'NVIDIA RTX 2070',
        switchableGraphicsTechnology: SwitchableGraphicsTechnology.NvidiaAdvancedOptimus,
        isDedicated: true
      },
      {
        name: 'NVIDIA RTX 3070',
        switchableGraphicsTechnology: SwitchableGraphicsTechnology.NvidiaAdvancedOptimus,
        isDedicated: true
      }
    ],
    muxStatus: MuxStatus.No,
    notes: ''
  }
];

export const allLaptops: () => LaptopInformation[] = () => {
  return LAPTOP_DATA;
};
