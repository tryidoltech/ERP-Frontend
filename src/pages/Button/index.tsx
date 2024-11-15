import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
import Button from "@/components/Base/Button";
import Lucide from "@/components/Base/Lucide";
import LoadingIcon from "@/components/Base/LoadingIcon";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/components/Base/PreviewComponent";
import { FormSwitch } from "@/components/Base/Form";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex items-center h-10">
          <div className="text-lg font-medium group-[.mode--light]:text-white">
            Buttons
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            Explore the versatility of our Buttons component for enhancing user
            interactions on your application.
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Basic Buttons
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
                        Buttons are fundamental elements in web and app design,
                        allowing users to interact with your content and perform
                        actions. The Basic Buttons component provides a range of
                        button styles that you can easily incorporate into your
                        project. These buttons come in various color variants to
                        suit your design needs.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap gap-2">
                              <Button variant="primary" className="w-24">
                                Primary
                              </Button>
                              <Button variant="secondary" className="w-24">
                                Secondary
                              </Button>
                              <Button variant="success" className="w-24">
                                Success
                              </Button>
                              <Button variant="warning" className="w-24">
                                Warning
                              </Button>
                              <Button variant="pending" className="w-24">
                                Pending
                              </Button>
                              <Button variant="danger" className="w-24">
                                Danger
                              </Button>
                              <Button variant="dark" className="w-24">
                                Dark
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap gap-2">
                <Button variant="primary" className="w-24">
                  Primary
                </Button>
                <Button variant="secondary" className="w-24">
                  Secondary
                </Button>
                <Button variant="success" className="w-24">
                  Success
                </Button>
                <Button variant="warning" className="w-24">
                  Warning
                </Button>
                <Button variant="pending" className="w-24">
                  Pending
                </Button>
                <Button variant="danger" className="w-24">
                  Danger
                </Button>
                <Button variant="dark" className="w-24">
                  Dark
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Buttons are essential for user interaction in your web
                        or app project. The Basic Buttons component provides a
                        wide range of styles and customization options to ensure
                        your buttons are not only functional but also visually
                        appealing.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Button Sizes
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
                        The Button Sizes component allows you to adjust the size
                        of buttons to match your design requirements. Whether
                        you need small, medium, or large buttons, this feature
                        ensures that your buttons fit seamlessly within your
                        user interface.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button
                                variant="primary"
                                size="sm"
                                className="w-24"
                              >
                                Small
                              </Button>
                              <Button variant="primary" className="w-24">
                                Medium
                              </Button>
                              <Button
                                variant="primary"
                                size="lg"
                                className="w-24"
                              >
                                Large
                              </Button>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-5">
                              <Button
                                variant="secondary"
                                size="sm"
                                className="w-24"
                              >
                                Small
                              </Button>
                              <Button variant="secondary" className="w-24">
                                Medium
                              </Button>
                              <Button
                                variant="secondary"
                                size="lg"
                                className="w-24"
                              >
                                Large
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  className="w-24"
                >
                  Small
                </Button>
                <Button variant="primary" className="w-24">
                  Medium
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-24"
                >
                  Large
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-5">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-24"
                >
                  Small
                </Button>
                <Button variant="secondary" className="w-24">
                  Medium
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-24"
                >
                  Large
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Button Sizes provide the flexibility you need to create
                        buttons that seamlessly integrate with your project's
                        design. Whether you want small, medium, or large
                        buttons, you can easily achieve the desired button size
                        with this component.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Working with Links
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
                        The Button Link component allows you to create buttons
                        that function as links. These buttons are versatile and
                        can be used to navigate to different sections of your
                        website or external URLs.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button
                                as="a"
                                variant="primary"
                                href=""
                                className="inline-block w-24"
                              >
                                Link
                              </Button>
                              <Button
                                as="a"
                                variant="secondary"
                                href=""
                                className="inline-block w-24"
                              >
                                Button
                              </Button>
                              <Button
                                as="a"
                                variant="success"
                                href=""
                                className="inline-block w-24"
                              >
                                Input
                              </Button>
                              <Button
                                as="a"
                                variant="warning"
                                href=""
                                className="inline-block w-24"
                              >
                                Submit
                              </Button>
                              <Button
                                as="a"
                                variant="pending"
                                href=""
                                className="inline-block w-24"
                              >
                                Pending
                              </Button>
                              <Button
                                as="a"
                                variant="danger"
                                href=""
                                className="inline-block w-24"
                              >
                                Reset
                              </Button>
                              <Button
                                as="a"
                                variant="dark"
                                href=""
                                className="inline-block w-24"
                              >
                                Metal
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button
                  as="a"
                  variant="primary"
                  href=""
                  className="inline-block w-24"
                >
                  Link
                </Button>
                <Button
                  as="a"
                  variant="secondary"
                  href=""
                  className="inline-block w-24"
                >
                  Button
                </Button>
                <Button
                  as="a"
                  variant="success"
                  href=""
                  className="inline-block w-24"
                >
                  Input
                </Button>
                <Button
                  as="a"
                  variant="warning"
                  href=""
                  className="inline-block w-24"
                >
                  Submit
                </Button>
                <Button
                  as="a"
                  variant="pending"
                  href=""
                  className="inline-block w-24"
                >
                  Pending
                </Button>
                <Button
                  as="a"
                  variant="danger"
                  href=""
                  className="inline-block w-24"
                >
                  Reset
                </Button>
                <Button
                  as="a"
                  variant="dark"
                  href=""
                  className="inline-block w-24"
                >
                  Metal
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Button Link components offer a seamless way to
                        incorporate interactive links into your web project. Use
                        them to create buttons that guide users to different
                        sections of your website or external URLs, enhancing
                        user experience and navigation.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Elevated Buttons
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
                        Elevated buttons are designed to stand out and provide
                        visual depth. They add a sense of interactivity to your
                        user interface, making it clear that these are clickable
                        elements. This section covers elevated buttons in
                        various styles.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button
                                variant="primary"
                                elevated
                                className="w-24"
                              >
                                Primary
                              </Button>
                              <Button
                                variant="secondary"
                                elevated
                                className="w-24"
                              >
                                Secondary
                              </Button>
                              <Button
                                variant="success"
                                elevated
                                className="w-24"
                              >
                                Success
                              </Button>
                              <Button
                                variant="warning"
                                elevated
                                className="w-24"
                              >
                                Warning
                              </Button>
                              <Button
                                variant="pending"
                                elevated
                                className="w-24"
                              >
                                Pending
                              </Button>
                              <Button
                                variant="danger"
                                elevated
                                className="w-24"
                              >
                                Danger
                              </Button>
                              <Button variant="dark" elevated className="w-24">
                                Dark
                              </Button>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mt-5">
                              <Button
                                variant="primary"
                                elevated
                                rounded
                                className="w-24"
                              >
                                Primary
                              </Button>
                              <Button
                                variant="secondary"
                                elevated
                                rounded
                                className="w-24"
                              >
                                Secondary
                              </Button>
                              <Button
                                variant="success"
                                elevated
                                rounded
                                className="w-24"
                              >
                                Success
                              </Button>
                              <Button
                                variant="warning"
                                elevated
                                rounded
                                className="w-24"
                              >
                                Warning
                              </Button>
                              <Button
                                variant="pending"
                                elevated
                                rounded
                                className="w-24"
                              >
                                Pending
                              </Button>
                              <Button
                                variant="danger"
                                elevated
                                rounded
                                className="w-24"
                              >
                                Danger
                              </Button>
                              <Button
                                variant="dark"
                                elevated
                                rounded
                                className="w-24"
                              >
                                Dark
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="primary"
                  elevated
                  className="w-24"
                >
                  Primary
                </Button>
                <Button
                  variant="secondary"
                  elevated
                  className="w-24"
                >
                  Secondary
                </Button>
                <Button
                  variant="success"
                  elevated
                  className="w-24"
                >
                  Success
                </Button>
                <Button
                  variant="warning"
                  elevated
                  className="w-24"
                >
                  Warning
                </Button>
                <Button
                  variant="pending"
                  elevated
                  className="w-24"
                >
                  Pending
                </Button>
                <Button
                  variant="danger"
                  elevated
                  className="w-24"
                >
                  Danger
                </Button>
                <Button variant="dark" elevated className="w-24">
                  Dark
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-5">
                <Button
                  variant="primary"
                  elevated
                  rounded
                  className="w-24"
                >
                  Primary
                </Button>
                <Button
                  variant="secondary"
                  elevated
                  rounded
                  className="w-24"
                >
                  Secondary
                </Button>
                <Button
                  variant="success"
                  elevated
                  rounded
                  className="w-24"
                >
                  Success
                </Button>
                <Button
                  variant="warning"
                  elevated
                  rounded
                  className="w-24"
                >
                  Warning
                </Button>
                <Button
                  variant="pending"
                  elevated
                  rounded
                  className="w-24"
                >
                  Pending
                </Button>
                <Button
                  variant="danger"
                  elevated
                  rounded
                  className="w-24"
                >
                  Danger
                </Button>
                <Button
                  variant="dark"
                  elevated
                  rounded
                  className="w-24"
                >
                  Dark
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Elevated buttons are an effective way to enhance the
                        interactivity and visual appeal of your user interface.
                        They offer a clear indication of clickable elements and
                        can be customized to match your design preferences.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Social Media Buttons
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
                        Social media buttons are essential for connecting with
                        your audience and promoting your content across various
                        platforms. This section covers social media buttons with
                        different icons and styles.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2 mt-5">
                              <Button variant="facebook" className="w-32">
                                <Lucide
                                  icon="Facebook"
                                  className="w-4 h-4 mr-2"
                                />{" "}
                                Facebook
                              </Button>
                              <Button variant="twitter" className="w-32">
                                <Lucide
                                  icon="Twitter"
                                  className="w-4 h-4 mr-2"
                                />{" "}
                                Twitter
                              </Button>
                              <Button variant="instagram" className="w-32">
                                <Lucide
                                  icon="Instagram"
                                  className="w-4 h-4 mr-2"
                                />{" "}
                                Instagram
                              </Button>
                              <Button variant="linkedin" className="w-32">
                                <Lucide
                                  icon="Linkedin"
                                  className="w-4 h-4 mr-2"
                                />{" "}
                                Linkedin
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2 mt-5">
                <Button variant="facebook" className="w-32">
                  <Lucide
                    icon="Facebook"
                    className="w-4 h-4 mr-2"
                  />{" "}
                  Facebook
                </Button>
                <Button variant="twitter" className="w-32">
                  <Lucide
                    icon="Twitter"
                    className="w-4 h-4 mr-2"
                  />{" "}
                  Twitter
                </Button>
                <Button variant="instagram" className="w-32">
                  <Lucide
                    icon="Instagram"
                    className="w-4 h-4 mr-2"
                  />{" "}
                  Instagram
                </Button>
                <Button variant="linkedin" className="w-32">
                  <Lucide
                    icon="Linkedin"
                    className="w-4 h-4 mr-2"
                  />{" "}
                  Linkedin
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Use these social media buttons strategically to promote
                        your content and connect with your users on their
                        preferred platforms, ultimately driving engagement and
                        growth.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Outline Buttons
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
                        Outline buttons provide a subtle and stylish way to
                        present actions or choices to your users. They maintain
                        a clean and minimalist appearance while offering clear
                        interaction points.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button
                                variant="outline-primary"
                                className="inline-block w-24"
                              >
                                Primary
                              </Button>
                              <Button
                                variant="outline-secondary"
                                className="inline-block w-24"
                              >
                                Secondary
                              </Button>
                              <Button
                                variant="outline-success"
                                className="inline-block w-24"
                              >
                                Success
                              </Button>
                              <Button
                                variant="outline-warning"
                                className="inline-block w-24"
                              >
                                Warning
                              </Button>
                              <Button
                                variant="outline-pending"
                                className="inline-block w-24"
                              >
                                Pending
                              </Button>
                              <Button
                                variant="outline-danger"
                                className="inline-block w-24"
                              >
                                Danger
                              </Button>
                              <Button
                                variant="outline-dark"
                                className="inline-block w-24"
                              >
                                Dark
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="outline-primary"
                  className="inline-block w-24"
                >
                  Primary
                </Button>
                <Button
                  variant="outline-secondary"
                  className="inline-block w-24"
                >
                  Secondary
                </Button>
                <Button
                  variant="outline-success"
                  className="inline-block w-24"
                >
                  Success
                </Button>
                <Button
                  variant="outline-warning"
                  className="inline-block w-24"
                >
                  Warning
                </Button>
                <Button
                  variant="outline-pending"
                  className="inline-block w-24"
                >
                  Pending
                </Button>
                <Button
                  variant="outline-danger"
                  className="inline-block w-24"
                >
                  Danger
                </Button>
                <Button
                  variant="outline-dark"
                  className="inline-block w-24"
                >
                  Dark
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Use outline buttons for actions like form submissions,
                        navigation, or as alternatives to regular buttons to
                        enhance your website or application's overall user
                        experience.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Loading State Buttons
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
                        Loading state buttons are an essential part of a
                        user-friendly interface. They indicate ongoing actions,
                        such as saving, adding, loading, or deleting, and
                        provide feedback to users while they wait for a process
                        to complete.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button variant="primary">
                                Saving
                                <LoadingIcon
                                  icon="oval"
                                  color="white"
                                  className="w-4 h-4 ml-2"
                                />
                              </Button>
                              <Button variant="success">
                                Adding
                                <LoadingIcon
                                  icon="spinning-circles"
                                  color="white"
                                  className="w-4 h-4 ml-2"
                                />
                              </Button>
                              <Button variant="warning">
                                Loading
                                <LoadingIcon
                                  icon="three-dots"
                                  color="1a202c"
                                  className="w-4 h-4 ml-2"
                                />
                              </Button>
                              <Button variant="danger">
                                Deleting
                                <LoadingIcon
                                  icon="puff"
                                  color="white"
                                  className="w-4 h-4 ml-2"
                                />
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button variant="primary">
                  Saving
                  <LoadingIcon
                    icon="oval"
                    color="white"
                    className="w-4 h-4 ml-2"
                  />
                </Button>
                <Button variant="success">
                  Adding
                  <LoadingIcon
                    icon="spinning-circles"
                    color="white"
                    className="w-4 h-4 ml-2"
                  />
                </Button>
                <Button variant="warning">
                  Loading
                  <LoadingIcon
                    icon="three-dots"
                    color="1a202c"
                    className="w-4 h-4 ml-2"
                  />
                </Button>
                <Button variant="danger">
                  Deleting
                  <LoadingIcon
                    icon="puff"
                    color="white"
                    className="w-4 h-4 ml-2"
                  />
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Consider using loading state buttons for actions like
                        saving, adding, loading data, or deleting items to
                        improve the overall usability of your website or
                        application.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Rounded Buttons
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
                        Rounded buttons provide a visually pleasing and modern
                        touch to your user interface. They soften the edges of
                        traditional buttons, making them appear more inviting
                        and user-friendly. This section explores how to use
                        rounded buttons effectively in your project.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button
                                variant="primary"
                                rounded
                                className="w-24"
                              >
                                Primary
                              </Button>
                              <Button
                                variant="secondary"
                                rounded
                                className="w-24"
                              >
                                Secondary
                              </Button>
                              <Button
                                variant="success"
                                rounded
                                className="w-24"
                              >
                                Success
                              </Button>
                              <Button
                                variant="warning"
                                rounded
                                className="w-24"
                              >
                                Warning
                              </Button>
                              <Button
                                variant="pending"
                                rounded
                                className="w-24"
                              >
                                Pending
                              </Button>
                              <Button variant="danger" rounded className="w-24">
                                Danger
                              </Button>
                              <Button variant="dark" rounded className="w-24">
                                Dark
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="primary"
                  rounded
                  className="w-24"
                >
                  Primary
                </Button>
                <Button
                  variant="secondary"
                  rounded
                  className="w-24"
                >
                  Secondary
                </Button>
                <Button
                  variant="success"
                  rounded
                  className="w-24"
                >
                  Success
                </Button>
                <Button
                  variant="warning"
                  rounded
                  className="w-24"
                >
                  Warning
                </Button>
                <Button
                  variant="pending"
                  rounded
                  className="w-24"
                >
                  Pending
                </Button>
                <Button variant="danger" rounded className="w-24">
                  Danger
                </Button>
                <Button variant="dark" rounded className="w-24">
                  Dark
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Consider using rounded buttons for various actions, such
                        as primary actions, secondary actions, success
                        notifications, and more, to make your UI elements more
                        aesthetically pleasing and approachable.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Soft Color Buttons
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
                        Soft color buttons add a touch of elegance and subtlety
                        to your user interface. These buttons use gentle, muted
                        colors that are visually appealing without being too
                        overpowering. In this section, you'll learn how to use
                        soft color buttons effectively in your project.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button
                                variant="soft-primary"
                                rounded
                                className="w-24"
                              >
                                Primary
                              </Button>
                              <Button
                                variant="soft-secondary"
                                rounded
                                className="w-24"
                              >
                                Secondary
                              </Button>
                              <Button
                                variant="soft-success"
                                rounded
                                className="w-24"
                              >
                                Success
                              </Button>
                              <Button
                                variant="soft-warning"
                                rounded
                                className="w-24"
                              >
                                Warning
                              </Button>
                              <Button
                                variant="soft-pending"
                                rounded
                                className="w-24"
                              >
                                Pending
                              </Button>
                              <Button
                                variant="soft-danger"
                                rounded
                                className="w-24"
                              >
                                Danger
                              </Button>
                              <Button
                                variant="soft-dark"
                                rounded
                                className="w-24"
                              >
                                Dark
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="soft-primary"
                  rounded
                  className="w-24"
                >
                  Primary
                </Button>
                <Button
                  variant="soft-secondary"
                  rounded
                  className="w-24"
                >
                  Secondary
                </Button>
                <Button
                  variant="soft-success"
                  rounded
                  className="w-24"
                >
                  Success
                </Button>
                <Button
                  variant="soft-warning"
                  rounded
                  className="w-24"
                >
                  Warning
                </Button>
                <Button
                  variant="soft-pending"
                  rounded
                  className="w-24"
                >
                  Pending
                </Button>
                <Button
                  variant="soft-danger"
                  rounded
                  className="w-24"
                >
                  Danger
                </Button>
                <Button
                  variant="soft-dark"
                  rounded
                  className="w-24"
                >
                  Dark
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Soft color buttons provide a subtle yet visually
                        appealing option for your UI elements. Their gentle
                        colors can enhance the aesthetics of your user interface
                        without overwhelming the user.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Icon Buttons
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
                        Icon buttons allow you to incorporate meaningful icons
                        into your user interface for various actions or
                        functions. In this section, you'll discover how to use
                        icon buttons effectively and enhance your user
                        experience.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button variant="primary" className="w-32">
                                <Lucide
                                  icon="Activity"
                                  className="w-4 h-4 mr-2"
                                />{" "}
                                Activity
                              </Button>
                              <Button variant="secondary" className="w-32">
                                <Lucide
                                  icon="HardDrive"
                                  className="w-4 h-4 mr-2"
                                />{" "}
                                Hard Drive
                              </Button>
                              <Button variant="success" className="w-32">
                                <Lucide
                                  icon="Calendar"
                                  className="w-4 h-4 mr-2"
                                />{" "}
                                Calendar
                              </Button>
                              <Button variant="warning" className="w-32">
                                <Lucide
                                  icon="Share2"
                                  className="w-4 h-4 mr-2"
                                />{" "}
                                Share
                              </Button>
                              <Button variant="pending" className="w-32">
                                <Lucide
                                  icon="Download"
                                  className="w-4 h-4 mr-2"
                                />{" "}
                                Pending
                              </Button>
                              <Button variant="danger" className="w-32">
                                <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                                Trash
                              </Button>
                              <Button variant="dark" className="w-32">
                                <Lucide icon="Image" className="w-4 h-4 mr-2" />{" "}
                                Image
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button variant="primary" className="w-32">
                  <Lucide
                    icon="Activity"
                    className="w-4 h-4 mr-2"
                  />{" "}
                  Activity
                </Button>
                <Button variant="secondary" className="w-32">
                  <Lucide
                    icon="HardDrive"
                    className="w-4 h-4 mr-2"
                  />{" "}
                  Hard Drive
                </Button>
                <Button variant="success" className="w-32">
                  <Lucide
                    icon="Calendar"
                    className="w-4 h-4 mr-2"
                  />{" "}
                  Calendar
                </Button>
                <Button variant="warning" className="w-32">
                  <Lucide
                    icon="Share2"
                    className="w-4 h-4 mr-2"
                  />{" "}
                  Share
                </Button>
                <Button variant="pending" className="w-32">
                  <Lucide
                    icon="Download"
                    className="w-4 h-4 mr-2"
                  />{" "}
                  Pending
                </Button>
                <Button variant="danger" className="w-32">
                  <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                  Trash
                </Button>
                <Button variant="dark" className="w-32">
                  <Lucide icon="Image" className="w-4 h-4 mr-2" />{" "}
                  Image
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Consider using icon buttons to streamline user
                        interactions, convey meaning at a glance, and create a
                        more intuitive interface for your audience.
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
                    <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Icon Only Buttons
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
                        Icon-only buttons are a powerful tool for creating
                        minimalist and intuitive user interfaces. In this
                        section, you'll learn how to use icon-only buttons
                        effectively to enhance the usability and aesthetics of
                        your web or app project.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex flex-wrap items-center gap-2">
                              <Button variant="primary">
                                <Lucide icon="Activity" className="w-5 h-5" />
                              </Button>
                              <Button variant="secondary">
                                <Lucide icon="HardDrive" className="w-5 h-5" />
                              </Button>
                              <Button variant="success">
                                <Lucide icon="Calendar" className="w-5 h-5" />
                              </Button>
                              <Button variant="warning">
                                <Lucide icon="Share2" className="w-5 h-5" />
                              </Button>
                              <Button variant="pending">
                                <Lucide icon="Download" className="w-5 h-5" />
                              </Button>
                              <Button variant="danger">
                                <Lucide icon="Trash" className="w-5 h-5" />
                              </Button>
                              <Button variant="dark">
                                <Lucide icon="Image" className="w-5 h-5" />
                              </Button>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
                <div className="flex flex-wrap items-center gap-2">
                <Button variant="primary">
                  <Lucide icon="Activity" className="w-5 h-5" />
                </Button>
                <Button variant="secondary">
                  <Lucide icon="HardDrive" className="w-5 h-5" />
                </Button>
                <Button variant="success">
                  <Lucide icon="Calendar" className="w-5 h-5" />
                </Button>
                <Button variant="warning">
                  <Lucide icon="Share2" className="w-5 h-5" />
                </Button>
                <Button variant="pending">
                  <Lucide icon="Download" className="w-5 h-5" />
                </Button>
                <Button variant="danger">
                  <Lucide icon="Trash" className="w-5 h-5" />
                </Button>
                <Button variant="dark">
                  <Lucide icon="Image" className="w-5 h-5" />
                </Button>
              </div>
                `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Icon-only buttons are an excellent choice for modern
                        user interfaces, offering simplicity, clarity, and a
                        sleek design. Whether you're designing a mobile app or a
                        web application, consider using icon-only buttons to
                        create a user-friendly and visually appealing interface
                        that keeps users engaged and informed.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="flex flex-col sm:items-center pb-5 mb-5 border-b border-dashed sm:flex-row border-slate-300/70">
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
                    <div className="-mt-px">Button</div>
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
                            HTML element type for the button (default is
                            "button" or "a")
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`size`</Table.Td>
                          <Table.Td>`Size`</Table.Td>
                          <Table.Td>Size of the button ("sm" or "lg")</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`variant`</Table.Td>
                          <Table.Td>`Variant`</Table.Td>
                          <Table.Td>Variant of the button style</Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`elevated`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            Indicates if the button has an elevated shadow
                          </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                          <Table.Td>`rounded`</Table.Td>
                          <Table.Td>`boolean`</Table.Td>
                          <Table.Td>
                            Indicates if the button is rounded
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
                    Basic Buttons
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Button Sizes
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Workign with Links
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Elevated Buttons
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Social Media Buttons
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Outline Buttons
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Loading State Buttons
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Rounded Buttons
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Soft Color Buttons
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Icon Buttons
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Icon Only Buttons
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
