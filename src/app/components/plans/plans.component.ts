import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
  plans = [
    {
      name: 'Básico',
      price: 'R$ 79/mês',
      features: ['Acesso à musculação', 'Horário comercial'],
      highlight: false
    },
    {
      name: 'Premium',
      price: 'R$ 129/mês',
      features: [
        'Acesso total',
        'Personal trainer',
        'Aulas coletivas'
      ],
      highlight: true
    },
    {
      name: 'VIP',
      price: 'R$ 179/mês',
      features: [
        'Acesso total',
        'Personal exclusivo',
        'Área VIP'
      ],
      highlight: false
    }
  ];
}
