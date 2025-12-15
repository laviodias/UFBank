'use client';

import React, { useState } from 'react';
import { FormField } from '../molecules/FormField';
import { Button } from '../atoms/Button';
import type { SelectOption } from '../atoms/Select';

interface MaquininhaFormData {
  marca: string;
  modelo: string;
  numeroSerie: string;
  tipoConexao: string;
  status: string;
  dataAquisicao: string;
  observacoes: string;
}

const marcas: SelectOption[] = [
  { value: '', label: 'Selecione uma marca' },
  { value: 'stone', label: 'Stone' },
  { value: 'cielo', label: 'Cielo' },
  { value: 'getnet', label: 'GetNet' },
  { value: 'rede', label: 'Rede' },
  { value: 'pagseguro', label: 'PagSeguro' },
  { value: 'mercado-pago', label: 'Mercado Pago' },
  { value: 'outra', label: 'Outra' },
];

const tiposConexao: SelectOption[] = [
  { value: '', label: 'Selecione o tipo de conexão' },
  { value: 'wifi', label: 'WiFi' },
  { value: 'bluetooth', label: 'Bluetooth' },
  { value: 'chip', label: 'Chip (3G/4G)' },
  { value: 'ethernet', label: 'Ethernet' },
  { value: 'usb', label: 'USB' },
];

const statusOptions: SelectOption[] = [
  { value: '', label: 'Selecione o status' },
  { value: 'ativo', label: 'Ativo' },
  { value: 'inativo', label: 'Inativo' },
  { value: 'manutencao', label: 'Em Manutenção' },
];

export const MaquininhaForm: React.FC = () => {
  const [formData, setFormData] = useState<MaquininhaFormData>({
    marca: '',
    modelo: '',
    numeroSerie: '',
    tipoConexao: '',
    status: '',
    dataAquisicao: '',
    observacoes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof MaquininhaFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name as keyof MaquininhaFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof MaquininhaFormData, string>> = {};

    if (!formData.marca) {
      newErrors.marca = 'A marca é obrigatória';
    }
    if (!formData.modelo.trim()) {
      newErrors.modelo = 'O modelo é obrigatório';
    }
    if (!formData.numeroSerie.trim()) {
      newErrors.numeroSerie = 'O número de série é obrigatório';
    }
    if (!formData.tipoConexao) {
      newErrors.tipoConexao = 'O tipo de conexão é obrigatório';
    }
    if (!formData.status) {
      newErrors.status = 'O status é obrigatório';
    }
    if (!formData.dataAquisicao) {
      newErrors.dataAquisicao = 'A data de aquisição é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Dados do formulário:', formData);
      // Aqui você pode fazer a chamada à API ou processar os dados
      alert('Maquininha cadastrada com sucesso!');
      
      // Resetar o formulário
      setFormData({
        marca: '',
        modelo: '',
        numeroSerie: '',
        tipoConexao: '',
        status: '',
        dataAquisicao: '',
        observacoes: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          type="select"
          label="Marca"
          name="marca"
          required
          options={marcas}
          error={errors.marca}
          value={formData.marca}
          onChange={handleChange}
        />
        
        <FormField
          type="input"
          label="Modelo"
          name="modelo"
          required
          placeholder="Ex: M3, TEF, etc."
          error={errors.modelo}
          value={formData.modelo}
          onChange={handleChange}
        />
        
        <FormField
          type="input"
          label="Número de Série"
          name="numeroSerie"
          required
          placeholder="Digite o número de série"
          error={errors.numeroSerie}
          value={formData.numeroSerie}
          onChange={handleChange}
        />
        
        <FormField
          type="select"
          label="Tipo de Conexão"
          name="tipoConexao"
          required
          options={tiposConexao}
          error={errors.tipoConexao}
          value={formData.tipoConexao}
          onChange={handleChange}
        />
        
        <FormField
          type="select"
          label="Status"
          name="status"
          required
          options={statusOptions}
          error={errors.status}
          value={formData.status}
          onChange={handleChange}
        />
        
        <FormField
          type="input"
          label="Data de Aquisição"
          name="dataAquisicao"
          inputType="date"
          required
          error={errors.dataAquisicao}
          value={formData.dataAquisicao}
          onChange={handleChange}
        />
      </div>
      
      <FormField
        type="textarea"
        label="Observações"
        name="observacoes"
        placeholder="Informações adicionais sobre a maquininha (opcional)"
        rows={4}
        value={formData.observacoes}
        onChange={handleChange}
      />
      
      <div className="flex gap-4 justify-end pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setFormData({
              marca: '',
              modelo: '',
              numeroSerie: '',
              tipoConexao: '',
              status: '',
              dataAquisicao: '',
              observacoes: '',
            });
            setErrors({});
          }}
        >
          Limpar
        </Button>
        <Button type="submit" variant="primary">
          Cadastrar Maquininha
        </Button>
      </div>
    </form>
  );
};

