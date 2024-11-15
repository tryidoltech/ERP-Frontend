import users from "@/fakers/users";
import Lucide from "@/components/Base/Lucide";
import { FormCheck } from "@/components/Base/Form";
import { Dialog } from "@/components/Base/Headless";
import { useState } from "react";
import _ from "lodash";

interface MainProps {
  switchAccount: boolean;
  setSwitchAccount: (val: boolean) => void;
}

function Main(props: MainProps) {
  const [switchAccount, setSwitchAccount] = useState(0);
  return (
    <Dialog
      open={props.switchAccount}
      onClose={() => {
        props.setSwitchAccount(false);
      }}
    >
      <Dialog.Panel>
        <Dialog.Title className="justify-center h-14">
          <h2 className="text-base font-medium">Switch Account</h2>
        </Dialog.Title>
        <Dialog.Description className="px-2.5 pt-3.5 pb-4">
          <div className="flex flex-col gap-1.5">
            {_.take(users.fakeUsers(), 5).map((faker, fakerKey) => (
              <FormCheck.Label
                htmlFor={"switch-account-" + fakerKey}
                className="flex items-center px-2.5 py-1 rounded-lg hover:bg-slate-100 cursor-pointer dark:hover:bg-darkmode-400"
                key={fakerKey}
              >
                <div className="overflow-hidden rounded-full w-11 h-11 image-fit border-[3px] border-slate-200/70">
                  <img
                    alt="Tailwise - Admin Dashboard Template"
                    src={faker.photo}
                  />
                </div>
                <div className="ml-3.5">
                  <div className="font-medium">{faker.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {faker.email}
                  </div>
                </div>
                <div className="relative ml-auto w-7 h-7">
                  <FormCheck.Input
                    id={"switch-account-" + fakerKey}
                    type="checkbox"
                    value="switch-account"
                    checked={switchAccount === fakerKey}
                    onChange={() => {
                      setSwitchAccount(fakerKey);
                    }}
                    className="absolute z-10 w-full h-full opacity-0 peer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center w-6 h-6 m-auto text-white transition-all border rounded-full opacity-0 bg-theme-1/80 border-theme-1 peer-checked:opacity-100">
                    <Lucide icon="Check" className="stroke-[1.5] w-3 h-3" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center w-6 h-6 m-auto transition-all border rounded-full text-primary border-theme-1/20 bg-theme-1/5 peer-checked:opacity-0 peer-hover:bg-theme-1/10"></div>
                </div>
              </FormCheck.Label>
            ))}
          </div>
        </Dialog.Description>
        <Dialog.Footer className="flex items-center justify-center text-center h-14">
          <a href="" className="block -mt-1 text-primary">
            Login into an Existing Account
          </a>
        </Dialog.Footer>
      </Dialog.Panel>
    </Dialog>
  );
}

export default Main;
