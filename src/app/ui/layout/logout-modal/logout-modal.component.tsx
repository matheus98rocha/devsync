import PrimaryButton from '../../components/button/primary-button.component'
import { LogoutModalProps } from './logout-modal.types'
import { GoAlertFill } from 'react-icons/go'

const LogoutModal = ({ handleLogout, handleCancel }: LogoutModalProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-zinc-800 opacity-60 z-10" onClick={handleCancel}></div>
      <div
        className="relative z-10 gap-2 flex flex-col rounded-2xl border border-blue-100 bg-contrastBackground p-4 shadow-lg sm:p-6 lg:p-8 animate-jump-in animate-delay-[1ms]"
        role="alert"
      >
        <div className="w-full flex items-center justify-center">
          <GoAlertFill className="text-alert" size={45} />
        </div>
        <p className="mt-4 text-gray-500">Tem certeza de que deseja sair ?</p>
        <div className="mt-6 flex flex-wrap gap-4 lg:grid lg:grid-cols-2 lg:gap-4">
          <PrimaryButton
            buttonText="Desconectar"
            handleOnClick={handleLogout}
            isDisabled={false}
            buttonType="outlined"
          />
          <PrimaryButton
            buttonText="Cancelar"
            handleOnClick={handleCancel}
            isDisabled={false}
            buttonType="alert"
          />
        </div>
      </div>
    </div>
  )
}

export default LogoutModal