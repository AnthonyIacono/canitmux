export interface LaptopInformation {
  manufacturer: string
  modelNumber: string
  cpus: string[]
  gpus: GpuInformation[]
  muxStatus: MuxStatus
  notes: string
}

export interface GpuInformation {
  name: string
  isDedicated: boolean
  switchableGraphicsTechnology: SwitchableGraphicsTechnology
}

export enum MuxStatus {
  No = 'No',
  Yes = 'Yes',
  Partial = 'Partial'
}

export enum SwitchableGraphicsTechnology {
  None,
  NvidiaOptimus,
  NvidiaAdvancedOptimus,
  AmdSwitchableGraphics
}
