import { Research } from '@/entities/Research'

export class Device extends Research {

constructor(label: string, icon: Object, color: string, speed: number) {

    super(label, icon, color, speed);
  }
}
