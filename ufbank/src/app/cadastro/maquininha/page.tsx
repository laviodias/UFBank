import { CadastroTemplate } from '@/components/templates/CadastroTemplate';
import { MaquininhaForm } from '@/components/organisms/MaquininhaForm';

export default function CadastroMaquininhaPage() {
  return (
    <CadastroTemplate
      title="Cadastro de Maquininha"
      description="Preencha os dados abaixo para cadastrar uma nova maquininha no sistema."
    >
      <MaquininhaForm />
    </CadastroTemplate>
  );
}

