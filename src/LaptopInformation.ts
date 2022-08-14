interface LaptopInformation {
  manufacturer: string
  modelNumber: string
  cpus: string[]
  gpus: GpuInformation[]
  muxStatus: MuxStatus
  notes: string
}
