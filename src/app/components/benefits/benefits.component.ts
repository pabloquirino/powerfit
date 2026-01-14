import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './model/model';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {
  benefits: Card[] = [
    {
      image: 'assets/equipamentos-modernos.avif',
      title: 'Equipamentos modernos',
      description: 'Aparelhos novos e manutenção constante.'
    },
    {
      image: 'assets/personal-trainer.avif',
      title: 'Personal trainers',
      description: 'Profissionais qualificados.'
    },
    {
      image: 'assets/powerfit.jpg',
      title: 'Horários flexíveis',
      description: 'Aberto todos os dias.'
    },
    {
      image: 'assets/treino.avif',
      title: 'Treinos personalizados',
      description: 'Planos feitos para você.'
    }
  ];
}
