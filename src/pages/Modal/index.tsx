import clsx from "clsx";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import {
  FormLabel,
  FormSwitch,
  FormInput,
  FormSelect,
} from "@/components/Base/Form";
import Table from "@/components/Base/Table";
import { Menu, Dialog } from "@/components/Base/Headless";
import TinySlider from "@/components/Base/TinySlider";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import products from "@/fakers/products";
import React, { useState, useRef } from "react";

function Main() {
  const [basicModalPreview, setBasicModalPreview] = useState(false);
  const [smallModalSizePreview, setSmallModalSizePreview] = useState(false);
  const [mediumModalSizePreview, setMediumModalSizePreview] = useState(false);
  const [largeModalSizePreview, setLargeModalSizePreview] = useState(false);
  const [superlargeModalSizePreview, setSuperlargeModalSizePreview] =
    useState(false);
  const [programmaticallyModal, setProgrammaticallyModal] = useState(false);
  const [warningModalPreview, setWarningModalPreview] = useState(false);
  const [buttonModalPreview, setButtonModalPreview] = useState(false);
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false);
  const [overlappingModalPreview, setOverlappingModalPreview] = useState(false);
  const [nextOverlappingModalPreview, setNextOverlappingModalPreview] =
    useState(false);
  const [headerFooterModalPreview, setHeaderFooterModalPreview] =
    useState(false);
  const [deleteModalPreview, setDeleteModalPreview] = useState(false);
  const [successModalPreview, setSuccessModalPreview] = useState(false);
  const [tinySliderModalPreview, setTinySliderModalPreview] = useState(false);
  const sendButtonRef = useRef(null);
  const deleteButtonRef = useRef(null);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Modal
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            Discover our modal component's versatility for lightboxes, user
            notifications, and more!
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Blank Modal
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Blank Modal" component allows you to create simple
                        and customizable modal dialogs that can be used to
                        display various types of content or messages to your
                        users. This modal type serves as a foundation for
                        creating customized modal experiences.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Modal Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                variant="primary"
                                onClick={() => {
                                  setBasicModalPreview(true);
                                }}
                              >
                                Show Modal
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={basicModalPreview}
                              onClose={() => {
                                setBasicModalPreview(false);
                              }}
                            >
                              <Dialog.Panel className="p-10 text-center">
                                This is totally awesome blank modal!
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    variant="primary"
                    onClick={() => {
                      setBasicModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={basicModalPreview}
                  onClose={() => {
                    setBasicModalPreview(false);
                  }}
                >
                  <Dialog.Panel className="p-10 text-center">
                    This is totally awesome blank modal!
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Blank Modal" component provides you with a starting
                        point for creating modals with your own content and
                        styling, making it a versatile tool for enhancing user
                        interactions within your web application.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Modal Size
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Modal Size" component allows you to create modals
                        of different sizes to accommodate various content types
                        or specific design requirements. You can choose from
                        four different modal sizes: Small, Medium, Large, and
                        Super Large, ensuring flexibility in displaying your
                        content.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="text-center">
                              {/* BEGIN: Small Modal Toggle */}
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setSmallModalSizePreview(true);
                                }}
                                className="mb-2 mr-1"
                              >
                                Show Small Modal
                              </Button>
                              {/* END: Small Modal Toggle */}
                              {/* BEGIN: Medium Modal Toggle */}
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setMediumModalSizePreview(true);
                                }}
                                className="mb-2 mr-1"
                              >
                                Show Medium Modal
                              </Button>
                              {/* END: Medium Modal Toggle */}
                              {/* BEGIN: Large Modal Toggle */}
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setLargeModalSizePreview(true);
                                }}
                                className="mb-2 mr-1"
                              >
                                Show Large Modal
                              </Button>
                              {/* END: Large Modal Toggle */}
                              {/* BEGIN: Super Large Modal Toggle */}
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setSuperlargeModalSizePreview(true);
                                }}
                                className="mb-2 mr-1"
                              >
                                Show Superlarge Modal
                              </Button>
                              {/* END: Super Large Modal Toggle */}
                            </div>
                            {/* BEGIN: Small Modal Content */}
                            <Dialog
                              size="sm"
                              open={smallModalSizePreview}
                              onClose={() => {
                                setSmallModalSizePreview(false);
                              }}
                            >
                              <Dialog.Panel className="p-10 text-center">
                                This is totally awesome small modal!
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Small Modal Content */}
                            {/* BEGIN: Medium Modal Content */}
                            <Dialog
                              open={mediumModalSizePreview}
                              onClose={() => {
                                setMediumModalSizePreview(false);
                              }}
                            >
                              <Dialog.Panel className="p-10 text-center">
                                This is totally awesome medium modal!
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Medium Modal Content */}
                            {/* BEGIN: Large Modal Content */}
                            <Dialog
                              size="lg"
                              open={largeModalSizePreview}
                              onClose={() => {
                                setLargeModalSizePreview(false);
                              }}
                            >
                              <Dialog.Panel className="p-10 text-center">
                                This is totally awesome large modal!
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Large Modal Content */}
                            {/* BEGIN: Super Large Modal Content */}
                            <Dialog
                              size="xl"
                              open={superlargeModalSizePreview}
                              onClose={() => {
                                setSuperlargeModalSizePreview(false);
                              }}
                            >
                              <Dialog.Panel className="p-10 text-center">
                                This is totally awesome superlarge modal!
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Super Large Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="text-center">
                {/* BEGIN: Small Modal Toggle */}
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setSmallModalSizePreview(true);
                  }}
                  className="mb-2 mr-1"
                >
                  Show Small Modal
                </Button>
                {/* END: Small Modal Toggle */}
                {/* BEGIN: Medium Modal Toggle */}
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setMediumModalSizePreview(true);
                  }}
                  className="mb-2 mr-1"
                >
                  Show Medium Modal
                </Button>
                {/* END: Medium Modal Toggle */}
                {/* BEGIN: Large Modal Toggle */}
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setLargeModalSizePreview(true);
                  }}
                  className="mb-2 mr-1"
                >
                  Show Large Modal
                </Button>
                {/* END: Large Modal Toggle */}
                {/* BEGIN: Super Large Modal Toggle */}
                <Button
                  as="a"
                  href="#"
                  variant="primary"
                  onClick={(event: React.MouseEvent) => {
                    event.preventDefault();
                    setSuperlargeModalSizePreview(true);
                  }}
                  className="mb-2 mr-1"
                >
                  Show Superlarge Modal
                </Button>
                {/* END: Super Large Modal Toggle */}
              </div>
              {/* BEGIN: Small Modal Content */}
              <Dialog
                size="sm"
                open={smallModalSizePreview}
                onClose={() => {
                  setSmallModalSizePreview(false);
                }}
              >
                <Dialog.Panel className="p-10 text-center">
                  This is totally awesome small modal!
                </Dialog.Panel>
              </Dialog>
              {/* END: Small Modal Content */}
              {/* BEGIN: Medium Modal Content */}
              <Dialog
                open={mediumModalSizePreview}
                onClose={() => {
                  setMediumModalSizePreview(false);
                }}
              >
                <Dialog.Panel className="p-10 text-center">
                  This is totally awesome medium modal!
                </Dialog.Panel>
              </Dialog>
              {/* END: Medium Modal Content */}
              {/* BEGIN: Large Modal Content */}
              <Dialog
                size="lg"
                open={largeModalSizePreview}
                onClose={() => {
                  setLargeModalSizePreview(false);
                }}
              >
                <Dialog.Panel className="p-10 text-center">
                  This is totally awesome large modal!
                </Dialog.Panel>
              </Dialog>
              {/* END: Large Modal Content */}
              {/* BEGIN: Super Large Modal Content */}
              <Dialog
                size="xl"
                open={superlargeModalSizePreview}
                onClose={() => {
                  setSuperlargeModalSizePreview(false);
                }}
              >
                <Dialog.Panel className="p-10 text-center">
                  This is totally awesome superlarge modal!
                </Dialog.Panel>
              </Dialog>
              {/* END: Super Large Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Modal Size" component empowers you to maintain a
                        consistent and visually appealing design while
                        accommodating various content types and ensuring a
                        seamless user experience.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Warning Modal
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Warning Modal" component provides a user-friendly
                        way to display warnings, errors, or important messages
                        to your users. It features a visually appealing and
                        attention-grabbing design, ensuring that critical
                        information is communicated effectively.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Modal Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setWarningModalPreview(true);
                                }}
                              >
                                Show Modal
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={warningModalPreview}
                              onClose={() => {
                                setWarningModalPreview(false);
                              }}
                            >
                              <Dialog.Panel>
                                <div className="p-5 text-center">
                                  <Lucide
                                    icon="XCircle"
                                    className="w-16 h-16 mx-auto mt-3 text-warning"
                                  />
                                  <div className="mt-5 text-3xl">Oops...</div>
                                  <div className="mt-2 text-slate-500">
                                    Something went wrong!
                                  </div>
                                </div>
                                <div className="px-5 pb-8 text-center">
                                  <Button
                                    type="button"
                                    variant="primary"
                                    onClick={() => {
                                      setWarningModalPreview(false);
                                    }}
                                    className="w-24"
                                  >
                                    Ok
                                  </Button>
                                </div>
                                <div className="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400">
                                  <a href="" className="text-primary">
                                    Why do I have this issue?
                                  </a>
                                </div>
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setWarningModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={warningModalPreview}
                  onClose={() => {
                    setWarningModalPreview(false);
                  }}
                >
                  <Dialog.Panel>
                    <div className="p-5 text-center">
                      <Lucide
                        icon="XCircle"
                        className="w-16 h-16 mx-auto mt-3 text-warning"
                      />
                      <div className="mt-5 text-3xl">Oops...</div>
                      <div className="mt-2 text-slate-500">
                        Something went wrong!
                      </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setWarningModalPreview(false);
                        }}
                        className="w-24"
                      >
                        Ok
                      </Button>
                    </div>
                    <div className="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400">
                      <a href="" className="text-primary">
                        Why do I have this issue?
                      </a>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Warning Modal" component ensures that important
                        messages are presented clearly and attractively, helping
                        users quickly grasp the nature of the warning and take
                        appropriate actions. Customize it to suit your
                        application's specific needs and design aesthetics.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Modal with Close Button
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Modal with Close Button" component provides an
                        intuitive and user-friendly way to display content
                        within a modal dialog while giving users the ability to
                        easily close the modal when needed. This modal variation
                        is useful for displaying messages, alerts, or additional
                        information without the need for complex interactions.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Modal Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setButtonModalPreview(true);
                                }}
                              >
                                Show Modal
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={buttonModalPreview}
                              onClose={() => {
                                setButtonModalPreview(false);
                              }}
                            >
                              <Dialog.Panel>
                                <a
                                  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    setButtonModalPreview(false);
                                  }}
                                  className="absolute top-0 right-0 mt-3 mr-3"
                                  href="#"
                                >
                                  <Lucide
                                    icon="X"
                                    className="w-8 h-8 text-slate-400"
                                  />
                                </a>
                                <div className="p-5 text-center">
                                  <Lucide
                                    icon="CheckCircle"
                                    className="w-16 h-16 mx-auto mt-3 text-success"
                                  />
                                  <div className="mt-5 text-3xl">
                                    Modal Example
                                  </div>
                                  <div className="mt-2 text-slate-500">
                                    Modal with close button
                                  </div>
                                </div>
                                <div className="px-5 pb-8 text-center">
                                  <Button
                                    type="button"
                                    variant="primary"
                                    onClick={() => {
                                      setButtonModalPreview(false);
                                    }}
                                    className="w-24"
                                  >
                                    Ok
                                  </Button>
                                </div>
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setButtonModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={buttonModalPreview}
                  onClose={() => {
                    setButtonModalPreview(false);
                  }}
                >
                  <Dialog.Panel>
                    <a
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setButtonModalPreview(false);
                      }}
                      className="absolute top-0 right-0 mt-3 mr-3"
                      href="#"
                    >
                      <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                    </a>
                    <div className="p-5 text-center">
                      <Lucide
                        icon="CheckCircle"
                        className="w-16 h-16 mx-auto mt-3 text-success"
                      />
                      <div className="mt-5 text-3xl">Modal Example</div>
                      <div className="mt-2 text-slate-500">
                        Modal with close button
                      </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setButtonModalPreview(false);
                        }}
                        className="w-24"
                      >
                        Ok
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Modal with Close Button" component simplifies the
                        process of displaying information in a modal dialog
                        while ensuring users can easily dismiss it when
                        necessary. Customize it to match your application's
                        style and content requirements.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Static Backdrop Modal
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Static Backdrop Modal" is a user-friendly way to
                        make sure your important messages get noticed. Unlike
                        regular pop-up windows, this one won't disappear when
                        you click outside or press escape. It's perfect for
                        situations where you want your users to pay full
                        attention, like sharing important updates or guiding
                        them through steps. With the "Static Backdrop Modal,"
                        your message stays in the spotlight until it's
                        acknowledged.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Modal Toggle */}
                            <div className="text-center">
                              <Button
                                variant="primary"
                                onClick={() => {
                                  setStaticBackdropModalPreview(true);
                                }}
                              >
                                Show Modal
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              staticBackdrop
                              open={staticBackdropModalPreview}
                              onClose={() => {
                                setStaticBackdropModalPreview(false);
                              }}
                            >
                              <Dialog.Panel className="px-5 py-10">
                                <div className="text-center">
                                  <div className="mb-5">
                                    I will not close if you click outside me.
                                    Don't even try to press escape key.
                                  </div>
                                  <Button
                                    type="button"
                                    variant="primary"
                                    onClick={() => {
                                      setStaticBackdropModalPreview(false);
                                    }}
                                    className="w-24"
                                  >
                                    Ok
                                  </Button>
                                </div>
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setStaticBackdropModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  staticBackdrop
                  open={staticBackdropModalPreview}
                  onClose={() => {
                    setStaticBackdropModalPreview(false);
                  }}
                >
                  <Dialog.Panel className="px-5 py-10">
                    <div className="text-center">
                      <div className="mb-5">
                        I will not close if you click outside me. Don't even
                        try to press escape key.
                      </div>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setStaticBackdropModalPreview(false);
                        }}
                        className="w-24"
                      >
                        Ok
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Now, you're all set to use the "Static Backdrop Modal"
                        and make sure your messages are seen and acknowledged
                        with ease.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Overlapping Modal
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Overlapping Modal" is a nifty feature that allows
                        you to display multiple modals on top of each other.
                        It's a great way to present information progressively
                        without overwhelming your users with too much content at
                        once. This feature enables you to create guided
                        experiences or step-by-step processes seamlessly.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Modal Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setOverlappingModalPreview(true);
                                }}
                              >
                                Show Modal
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={overlappingModalPreview}
                              onClose={() => {
                                setOverlappingModalPreview(false);
                              }}
                            >
                              <Dialog.Panel className="px-5 py-10">
                                <div className="text-center">
                                  <div className="mb-5">
                                    Click button bellow to show overlapping
                                    modal!
                                  </div>
                                  {/* BEGIN: Overlapping Modal Toggle */}
                                  <Button
                                    as="a"
                                    href="#"
                                    variant="primary"
                                    onClick={(event: React.MouseEvent) => {
                                      event.preventDefault();
                                      setNextOverlappingModalPreview(true);
                                    }}
                                  >
                                    Show Overlapping Modal
                                  </Button>
                                  {/* END: Overlapping Modal Toggle */}
                                </div>
                                {/* BEGIN: Overlapping Modal Content */}
                                <Dialog
                                  open={nextOverlappingModalPreview}
                                  onClose={() => {
                                    setNextOverlappingModalPreview(false);
                                  }}
                                >
                                  <Dialog.Panel className="p-5 text-center">
                                    This is totally awesome overlapping modal!
                                  </Dialog.Panel>
                                </Dialog>
                                {/* END: Overlapping Modal Content */}
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setOverlappingModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={overlappingModalPreview}
                  onClose={() => {
                    setOverlappingModalPreview(false);
                  }}
                >
                  <Dialog.Panel className="px-5 py-10">
                    <div className="text-center">
                      <div className="mb-5">
                        Click button bellow to show overlapping modal!
                      </div>
                      {/* BEGIN: Overlapping Modal Toggle */}
                      <Button
                        as="a"
                        href="#"
                        variant="primary"
                        onClick={(event: React.MouseEvent) => {
                          event.preventDefault();
                          setNextOverlappingModalPreview(true);
                        }}
                      >
                        Show Overlapping Modal
                      </Button>
                      {/* END: Overlapping Modal Toggle */}
                    </div>
                    {/* BEGIN: Overlapping Modal Content */}
                    <Dialog
                      open={nextOverlappingModalPreview}
                      onClose={() => {
                        setNextOverlappingModalPreview(false);
                      }}
                    >
                      <Dialog.Panel className="p-5 text-center">
                        This is totally awesome overlapping modal!
                      </Dialog.Panel>
                    </Dialog>
                    {/* END: Overlapping Modal Content */}
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Now you have the power of the "Overlapping Modal" at
                        your fingertips. Use it to create user-friendly and
                        informative experiences that lead your users through
                        your application seamlessly. This feature ensures that
                        your content remains organized and accessible, making it
                        easier for users to absorb information at their own
                        pace.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Header & Footer Modal
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Header & Footer Modal" component offers a flexible
                        way to create modals with distinctive headers and
                        footers. These sections are perfect for adding titles,
                        actions, and extra information to your modal dialogs.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Modal Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setHeaderFooterModalPreview(true);
                                }}
                              >
                                Show Modal
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={headerFooterModalPreview}
                              onClose={() => {
                                setHeaderFooterModalPreview(false);
                              }}
                              initialFocus={sendButtonRef}
                            >
                              <Dialog.Panel>
                                <Dialog.Title>
                                  <h2 className="mr-auto text-base font-medium">
                                    Broadcast Message
                                  </h2>
                                  <Button
                                    variant="outline-secondary"
                                    className="hidden sm:flex"
                                  >
                                    <Lucide
                                      icon="File"
                                      className="w-4 h-4 mr-2"
                                    />{" "}
                                    Download Docs
                                  </Button>
                                  <Menu className="sm:hidden">
                                    <Menu.Button
                                      as="a"
                                      className="block w-5 h-5"
                                      href="#"
                                    >
                                      <Lucide
                                        icon="MoreHorizontal"
                                        className="w-5 h-5 text-slate-500"
                                      />
                                    </Menu.Button>
                                    <Menu.Items className="w-40">
                                      <Menu.Item>
                                        <Lucide
                                          icon="File"
                                          className="w-4 h-4 mr-2"
                                        />
                                        Download Docs
                                      </Menu.Item>
                                    </Menu.Items>
                                  </Menu>
                                </Dialog.Title>
                                <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-form-1">
                                      From
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-1"
                                      type="text"
                                      placeholder="example@gmail.com"
                                    />
                                  </div>
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-form-2">
                                      To
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-2"
                                      type="text"
                                      placeholder="example@gmail.com"
                                    />
                                  </div>
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-form-3">
                                      Subject
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-3"
                                      type="text"
                                      placeholder="Important Meeting"
                                    />
                                  </div>
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-form-4">
                                      Has the Words
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-4"
                                      type="text"
                                      placeholder="Job, Work, Documentation"
                                    />
                                  </div>
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-form-5">
                                      Doesn't Have
                                    </FormLabel>
                                    <FormInput
                                      id="modal-form-5"
                                      type="text"
                                      placeholder="Job, Work, Documentation"
                                    />
                                  </div>
                                  <div className="col-span-12 sm:col-span-6">
                                    <FormLabel htmlFor="modal-form-6">
                                      Size
                                    </FormLabel>
                                    <FormSelect id="modal-form-6">
                                      <option>10</option>
                                      <option>25</option>
                                      <option>35</option>
                                      <option>50</option>
                                    </FormSelect>
                                  </div>
                                </Dialog.Description>
                                <Dialog.Footer>
                                  <Button
                                    type="button"
                                    variant="outline-secondary"
                                    onClick={() => {
                                      setHeaderFooterModalPreview(false);
                                    }}
                                    className="w-20 mr-1"
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    variant="primary"
                                    type="button"
                                    className="w-20"
                                    ref={sendButtonRef}
                                  >
                                    Send
                                  </Button>
                                </Dialog.Footer>
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setHeaderFooterModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={headerFooterModalPreview}
                  onClose={() => {
                    setHeaderFooterModalPreview(false);
                  }}
                  initialFocus={sendButtonRef}
                >
                  <Dialog.Panel>
                    <Dialog.Title>
                      <h2 className="mr-auto text-base font-medium">
                        Broadcast Message
                      </h2>
                      <Button
                        variant="outline-secondary"
                        className="hidden sm:flex"
                      >
                        <Lucide icon="File" className="w-4 h-4 mr-2" />{" "}
                        Download Docs
                      </Button>
                      <Menu className="sm:hidden">
                        <Menu.Button className="block w-5 h-5" href="#">
                          <Lucide
                            icon="MoreHorizontal"
                            className="w-5 h-5 text-slate-500"
                          />
                        </Menu.Button>
                        <Menu.Items className="w-40">
                          <Menu.Item>
                            <Lucide icon="File" className="w-4 h-4 mr-2" />
                            Download Docs
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </Dialog.Title>
                    <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                      <div className="col-span-12 sm:col-span-6">
                        <FormLabel
                          htmlFor="modal-form-1"
                        >
                          From
                        </FormLabel>
                        <FormInput
                          id="modal-form-1"
                          type="text"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <FormLabel
                          htmlFor="modal-form-2"
                        >
                          To
                        </FormLabel>
                        <FormInput
                          id="modal-form-2"
                          type="text"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <FormLabel
                          htmlFor="modal-form-3"
                        >
                          Subject
                        </FormLabel>
                        <FormInput
                          id="modal-form-3"
                          type="text"
                          placeholder="Important Meeting"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <FormLabel
                          htmlFor="modal-form-4"
                        >
                          Has the Words
                        </FormLabel>
                        <FormInput
                          id="modal-form-4"
                          type="text"
                          placeholder="Job, Work, Documentation"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <FormLabel
                          htmlFor="modal-form-5"
                        >
                          Doesn't Have
                        </FormLabel>
                        <FormInput
                          id="modal-form-5"
                          type="text"
                          placeholder="Job, Work, Documentation"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <FormLabel
                          htmlFor="modal-form-6"
                        >
                          Size
                        </FormLabel>
                        <FormSelect
                          id="modal-form-6"
                        >
                          <option>10</option>
                          <option>25</option>
                          <option>35</option>
                          <option>50</option>
                        </FormSelect>
                      </div>
                    </Dialog.Description>
                    <Dialog.Footer>
                      <Button
                        type="button"
                        variant="outline-secondary"
                        onClick={() => {
                          setHeaderFooterModalPreview(false);
                        }}
                        className="w-20 mr-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        type="button"
                        className="w-20"
                        ref={sendButtonRef}
                      >
                        Send
                      </Button>
                    </Dialog.Footer>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Enhance your modals by adding titles, actions, and
                        relevant form fields to engage your users effectively.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Delete Modal
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Delete Modal" component is a valuable tool for
                        confirming critical actions that may have irreversible
                        consequences, such as deleting records or data. This
                        modal prompts users to make a deliberate decision before
                        proceeding with an action.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Modal Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setDeleteModalPreview(true);
                                }}
                              >
                                Show Modal
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={deleteModalPreview}
                              onClose={() => {
                                setDeleteModalPreview(false);
                              }}
                              initialFocus={deleteButtonRef}
                            >
                              <Dialog.Panel>
                                <div className="p-5 text-center">
                                  <Lucide
                                    icon="XCircle"
                                    className="w-16 h-16 mx-auto mt-3 text-danger"
                                  />
                                  <div className="mt-5 text-3xl">
                                    Are you sure?
                                  </div>
                                  <div className="mt-2 text-slate-500">
                                    Do you really want to delete these records?{" "}
                                    <br />
                                    This process cannot be undone.
                                  </div>
                                </div>
                                <div className="px-5 pb-8 text-center">
                                  <Button
                                    type="button"
                                    variant="outline-secondary"
                                    onClick={() => {
                                      setDeleteModalPreview(false);
                                    }}
                                    className="w-24 mr-1"
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    type="button"
                                    variant="danger"
                                    className="w-24"
                                    ref={deleteButtonRef}
                                  >
                                    Delete
                                  </Button>
                                </div>
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setDeleteModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={deleteModalPreview}
                  onClose={() => {
                    setDeleteModalPreview(false);
                  }}
                  initialFocus={deleteButtonRef}
                >
                  <Dialog.Panel>
                    <div className="p-5 text-center">
                      <Lucide
                        icon="XCircle"
                        className="w-16 h-16 mx-auto mt-3 text-danger"
                      />
                      <div className="mt-5 text-3xl">Are you sure?</div>
                      <div className="mt-2 text-slate-500">
                        Do you really want to delete these records? <br />
                        This process cannot be undone.
                      </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                      <Button
                        type="button"
                        variant="outline-secondary"
                        onClick={() => {
                          setDeleteModalPreview(false);
                        }}
                        className="w-24 mr-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="button"
                        variant="danger"
                        className="w-24"
                        ref={deleteButtonRef}
                      >
                        Delete
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Delete Modal" serves as a protective barrier
                        against accidental deletions and provides users with an
                        opportunity to confirm their intentions before
                        proceeding. It helps prevent data loss and offers peace
                        of mind when handling sensitive actions.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Success Modal
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Success Modal" component is a simple and effective
                        way to provide users with positive feedback and
                        acknowledge successful actions within your application.
                        This modal conveys a sense of accomplishment and offers
                        users confirmation that they've completed a task or
                        action.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Modal Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setSuccessModalPreview(true);
                                }}
                              >
                                Show Modal
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={successModalPreview}
                              onClose={() => {
                                setSuccessModalPreview(false);
                              }}
                            >
                              <Dialog.Panel>
                                <div className="p-5 text-center">
                                  <Lucide
                                    icon="CheckCircle"
                                    className="w-16 h-16 mx-auto mt-3 text-success"
                                  />
                                  <div className="mt-5 text-3xl">Good job!</div>
                                  <div className="mt-2 text-slate-500">
                                    You clicked the button!
                                  </div>
                                </div>
                                <div className="px-5 pb-8 text-center">
                                  <Button
                                    type="button"
                                    variant="primary"
                                    onClick={() => {
                                      setSuccessModalPreview(false);
                                    }}
                                    className="w-24"
                                  >
                                    Ok
                                  </Button>
                                </div>
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setSuccessModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={successModalPreview}
                  onClose={() => {
                    setSuccessModalPreview(false);
                  }}
                >
                  <Dialog.Panel>
                    <div className="p-5 text-center">
                      <Lucide
                        icon="CheckCircle"
                        className="w-16 h-16 mx-auto mt-3 text-success"
                      />
                      <div className="mt-5 text-3xl">Good job!</div>
                      <div className="mt-2 text-slate-500">
                        You clicked the button!
                      </div>
                    </div>
                    <div className="px-5 pb-8 text-center">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          setSuccessModalPreview(false);
                        }}
                        className="w-24"
                      >
                        Ok
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Success Modal" enhances the user experience by
                        providing clear and encouraging feedback. It helps users
                        feel accomplished and confident in their actions,
                        contributing to a more positive overall user journey.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Tiny Slider Modal
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Tiny Slider Modal" component combines the elegance
                        of modal dialogs with the dynamic functionality of a
                        tiny slider. It allows you to present images or content
                        in a visually appealing and interactive way within a
                        modal.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Modal Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setTinySliderModalPreview(true);
                                }}
                              >
                                Show Modal
                              </Button>
                            </div>
                            {/* END: Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={tinySliderModalPreview}
                              onClose={() => {
                                setTinySliderModalPreview(false);
                              }}
                            >
                              <Dialog.Panel className="p-5">
                                <div className="mx-6">
                                  <TinySlider
                                    options={{
                                      mouseDrag: true,
                                      autoplay: false,
                                      controls: true,
                                      center: true,
                                      items: 1,
                                      nav: false,
                                      speed: 500,
                                      responsive: {
                                        600: {
                                          items: 2,
                                        },
                                      },
                                    }}
                                  >
                                    <div className="h-56 px-2">
                                      <div className="h-full overflow-hidden rounded-md image-fit">
                                        <img
                                          alt="Tailwise - Admin Dashboard Template"
                                          src={
                                            products.fakeProducts()[0].images[0]
                                              .path
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="h-56 px-2">
                                      <div className="h-full overflow-hidden rounded-md image-fit">
                                        <img
                                          alt="Tailwise - Admin Dashboard Template"
                                          src={
                                            products.fakeProducts()[0].images[0]
                                              .path
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="h-56 px-2">
                                      <div className="h-full overflow-hidden rounded-md image-fit">
                                        <img
                                          alt="Tailwise - Admin Dashboard Template"
                                          src={
                                            products.fakeProducts()[0].images[0]
                                              .path
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="h-56 px-2">
                                      <div className="h-full overflow-hidden rounded-md image-fit">
                                        <img
                                          alt="Tailwise - Admin Dashboard Template"
                                          src={
                                            products.fakeProducts()[0].images[0]
                                              .path
                                          }
                                        />
                                      </div>
                                    </div>
                                  </TinySlider>
                                </div>
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setTinySliderModalPreview(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={tinySliderModalPreview}
                  onClose={() => {
                    setTinySliderModalPreview(false);
                  }}
                >
                  <Dialog.Panel className="p-5">
                    <div className="mx-6">
                      <TinySlider
                        options={{
                          mouseDrag: true,
                          autoplay: false,
                          controls: true,
                          center: true,
                          items: 1,
                          nav: false,
                          speed: 500,
                          responsive: {
                            600: {
                              items: 2,
                            },
                          },
                        }}
                      >
                        <div className="h-56 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="Tailwise - Admin Dashboard Template"
                              src={products.fakeProducts()[0].images[0].path}
                            />
                          </div>
                        </div>
                        <div className="h-56 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="Tailwise - Admin Dashboard Template"
                              src={products.fakeProducts()[0].images[0].path}
                            />
                          </div>
                        </div>
                        <div className="h-56 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="Tailwise - Admin Dashboard Template"
                              src={products.fakeProducts()[0].images[0].path}
                            />
                          </div>
                        </div>
                        <div className="h-56 px-2">
                          <div className="h-full overflow-hidden rounded-md image-fit">
                            <img
                              alt="Tailwise - Admin Dashboard Template"
                              src={products.fakeProducts()[0].images[0].path}
                            />
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Tiny Slider Modal" is an excellent choice for
                        showcasing images or content in a compact and
                        interactive way. It combines the convenience of modals
                        with the engaging functionality of a slider, making it
                        ideal for presenting product galleries, image
                        portfolios, or any content that benefits from a dynamic
                        presentation.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Programmatically Show/Hide Modal
                      </div>
                      <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                        <FormSwitch.Label
                          htmlFor="show-example-1"
                          className="ml-0 sm:ml-2"
                        >
                          Show example code
                        </FormSwitch.Label>
                        <FormSwitch.Input
                          id="show-example-1"
                          onClick={toggle}
                          className="ml-3 mr-0"
                          type="checkbox"
                        />
                      </FormSwitch>
                    </div>
                    <div>
                      <p className="leading-relaxed">
                        The "Programmatically Show/Hide Modal" feature empowers
                        you to control modal visibility through code, allowing
                        for dynamic interactions within your web application.
                        This section explains how to programmatically manage the
                        display of modals.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            {/* BEGIN: Show Modal Toggle */}
                            <div className="text-center">
                              <Button
                                as="a"
                                href="#"
                                variant="primary"
                                className="mb-2 mr-1"
                                onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  setProgrammaticallyModal(true);
                                }}
                              >
                                Show Modal
                              </Button>
                            </div>
                            {/* END: Show Modal Toggle */}
                            {/* BEGIN: Modal Content */}
                            <Dialog
                              open={programmaticallyModal}
                              onClose={() => {
                                setProgrammaticallyModal(false);
                              }}
                            >
                              <Dialog.Panel className="p-10 text-center">
                                {/* BEGIN: Hide Modal Toggle */}
                                <Button
                                  as="a"
                                  href="#"
                                  variant="primary"
                                  className="mr-1"
                                  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    setProgrammaticallyModal(false);
                                  }}
                                >
                                  Hide Modal
                                </Button>
                                {/* END: Hide Modal Toggle */}
                                {/* BEGIN: Toggle Modal Toggle */}
                                <Button
                                  as="a"
                                  href="#"
                                  variant="primary"
                                  className="mr-1"
                                  onClick={(event: React.MouseEvent) => {
                                    event.preventDefault();
                                    setProgrammaticallyModal(
                                      !programmaticallyModal
                                    );
                                  }}
                                >
                                  Toggle Modal
                                </Button>
                                {/* END: Toggle Modal Toggle */}
                              </Dialog.Panel>
                            </Dialog>
                            {/* END: Modal Content */}
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                {/* BEGIN: Show Modal Toggle */}
                <div className="text-center">
                  <Button
                    as="a"
                    href="#"
                    variant="primary"
                    className="mb-2 mr-1"
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      setProgrammaticallyModal(true);
                    }}
                  >
                    Show Modal
                  </Button>
                </div>
                {/* END: Show Modal Toggle */}
                {/* BEGIN: Modal Content */}
                <Dialog
                  open={programmaticallyModal}
                  onClose={() => {
                    setProgrammaticallyModal(false);
                  }}
                >
                  <Dialog.Panel className="p-10 text-center">
                    {/* BEGIN: Hide Modal Toggle */}
                    <Button
                      as="a"
                      href="#"
                      variant="primary"
                      className="mr-1"
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setProgrammaticallyModal(false);
                      }}
                    >
                      Hide Modal
                    </Button>
                    {/* END: Hide Modal Toggle */}
                    {/* BEGIN: Toggle Modal Toggle */}
                    <Button
                      as="a"
                      href="#"
                      variant="primary"
                      className="mr-1"
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setProgrammaticallyModal(!programmaticallyModal);
                      }}
                    >
                      Toggle Modal
                    </Button>
                    {/* END: Toggle Modal Toggle */}
                  </Dialog.Panel>
                </Dialog>
                {/* END: Modal Content */}
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        The "Programmatically Show/Hide Modal" feature enhances
                        your web application's interactivity by providing
                        precise control over modal visibility. Whether you need
                        to trigger modals based on user actions, responses from
                        API calls, or any dynamic event, this capability enables
                        you to create engaging user experiences tailored to your
                        application's requirements.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                <div className="text-[0.94rem] font-medium">Component API</div>
              </div>
              <div>
                <p className="leading-relaxed">
                  In this section, you will find detailed information about the
                  available props, classes, and options that can be used with
                  the component. Understanding these properties is essential for
                  customizing and configuring the component to suit your
                  specific requirements.
                </p>
                <p className="mt-2 leading-relaxed">
                  Below is a list of props that can be passed to the component:
                </p>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute left-0 px-3 ml-4 -mt-2.5 font-medium bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Dialog</div>
                  </div>
                  <div className="px-5 pt-2 pb-5 mt-2.5 flex flex-col gap-3.5 leading-relaxed overflow-x-auto">
                    <Table sm>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th className="w-44 whitespace-nowrap">
                            Prop
                          </Table.Th>
                          <Table.Th className="w-56 whitespace-nowrap">
                            Type
                          </Table.Th>
                          <Table.Th className="whitespace-nowrap">
                            Description
                          </Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        <Table.Tr>
                          <Table.Td>`as`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            HTML element type for the modal (default is "div").
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`open`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            Whether the modal is open or closed.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`onClose`</Table.Td>
                          <Table.Td>`function`</Table.Td>
                          <Table.Td>
                            Callback function to be executed when the modal is
                            closed.
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`staticBackdrop`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            Whether the modal has a static backdrop (clicking
                            outside won't close it).
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`size`</Table.Td>
                          <Table.Td>`Size`</Table.Td>
                          <Table.Td>
                            Size of the modal, one of "sm," "md," "lg," or "xl"
                            (default is "md").
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute left-0 px-3 ml-4 -mt-2.5 font-medium bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Dialog.Panel</div>
                  </div>
                  <div className="px-5 pt-2 pb-5 mt-2.5 flex flex-col gap-3.5 leading-relaxed overflow-x-auto">
                    <Table sm>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th className="w-44 whitespace-nowrap">
                            Prop
                          </Table.Th>
                          <Table.Th className="w-56 whitespace-nowrap">
                            Type
                          </Table.Th>
                          <Table.Th className="whitespace-nowrap">
                            Description
                          </Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        <Table.Tr>
                          <Table.Td>`as`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            HTML element type for the modal panel (default is
                            "div").
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute left-0 px-3 ml-4 -mt-2.5 font-medium bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Dialog.Title</div>
                  </div>
                  <div className="px-5 pt-2 pb-5 mt-2.5 flex flex-col gap-3.5 leading-relaxed overflow-x-auto">
                    <Table sm>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th className="w-44 whitespace-nowrap">
                            Prop
                          </Table.Th>
                          <Table.Th className="w-56 whitespace-nowrap">
                            Type
                          </Table.Th>
                          <Table.Th className="whitespace-nowrap">
                            Description
                          </Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        <Table.Tr>
                          <Table.Td>`as`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            HTML element type for the modal title (default is
                            "div").
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute left-0 px-3 ml-4 -mt-2.5 font-medium bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Dialog.Description</div>
                  </div>
                  <div className="px-5 pt-2 pb-5 mt-2.5 flex flex-col gap-3.5 leading-relaxed overflow-x-auto">
                    <Table sm>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th className="w-44 whitespace-nowrap">
                            Prop
                          </Table.Th>
                          <Table.Th className="w-56 whitespace-nowrap">
                            Type
                          </Table.Th>
                          <Table.Th className="whitespace-nowrap">
                            Description
                          </Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        <Table.Tr>
                          <Table.Td>`as`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            HTML element type for the modal description (default
                            is "div").
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
                <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                  <div className="absolute left-0 px-3 ml-4 -mt-2.5 font-medium bg-white text-slate-500 dark:bg-darkmode-600">
                    <div className="-mt-px">Dialog.Footer</div>
                  </div>
                  <div className="px-5 pt-2 pb-5 mt-2.5 flex flex-col gap-3.5 leading-relaxed overflow-x-auto">
                    <Table sm>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th className="w-44 whitespace-nowrap">
                            Prop
                          </Table.Th>
                          <Table.Th className="w-56 whitespace-nowrap">
                            Type
                          </Table.Th>
                          <Table.Th className="whitespace-nowrap">
                            Description
                          </Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        <Table.Tr>
                          <Table.Td>`as`</Table.Td>
                          <Table.Td>`string`</Table.Td>
                          <Table.Td>
                            HTML element type for the modal footer (default is
                            "div").
                          </Table.Td>
                        </Table.Tr>
                      </Table.Tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-first col-span-12 lg:order-last lg:col-span-3 xl:col-span-2">
            <div className="sticky top-[104px]">
              <ul className="relative flex flex-col py-2.5 rounded-[0.6rem] bg-primary/[0.03] group-[.mode--light]:bg-slate-300/10 border border-primary/10 group-[.mode--light]:border-slate-300/20 text-slate-600/80 dark:group-[.mode--light]:bg-darkmode-500/60 dark:group-[.mode--light]:border-darkmode-200/60">
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400 active",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Blank Modal
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Modal Size
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Warning Modal
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Modal with Close Button
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Static Backdrop Modal
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Overlapping Modal
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Header & Footer Modal
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Delete Modal
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Success Modal
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Tiny Slider Modal
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Programmatically Show/Hide Modal
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Component API
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
