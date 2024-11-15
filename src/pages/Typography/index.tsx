import clsx from "clsx";
import _ from "lodash";
import Table from "@/components/Base/Table";
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
            Heading
          </div>
          <div className="group-[.mode--light]:text-white/80 mx-3 hidden lg:block">
            •
          </div>
          <div className="group-[.mode--light]:text-white/80 text-slate-500 leading-relaxed hidden lg:block">
            Unleash the power of our Heading component to effortlessly create
            eye-catching and well-structured headings for your web content.
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <PreviewComponent>
                {({ toggle }) => (
                  <>
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">Heading</div>
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
                        Headings are an essential part of structuring and
                        organizing content in your application. They provide
                        hierarchy and help users navigate and understand the
                        information presented. This section covers how to use
                        headings effectively in your project.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              <h1 className="text-4xl font-medium leading-none">
                                h1. Heading 1
                              </h1>
                              <h2 className="mt-3 text-3xl font-medium leading-none">
                                h2. Heading 2
                              </h2>
                              <h3 className="mt-3 text-2xl font-medium leading-none">
                                h3. Heading 3
                              </h3>
                              <h4 className="mt-3 text-xl font-medium leading-none">
                                h4. Heading 4
                              </h4>
                              <h5 className="mt-3 text-lg font-medium leading-none">
                                h5. Heading 5
                              </h5>
                              <h6 className="mt-3 font-medium leading-none">
                                h6. Heading 6
                              </h6>
                            </div>
                            <div className="mt-5">
                              <h1 className="text-4xl font-medium leading-none text-primary">
                                h1. Heading 1
                              </h1>
                              <h2 className="mt-3 text-3xl font-medium leading-none text-slate-600 dark:text-slate-500">
                                h2. Heading 2
                              </h2>
                              <h3 className="mt-3 text-2xl font-medium leading-none text-success">
                                h3. Heading 3
                              </h3>
                              <h4 className="mt-3 text-xl font-medium leading-none text-warning">
                                h4. Heading 4
                              </h4>
                              <h5 className="mt-3 text-lg font-medium leading-none text-danger">
                                h5. Heading 5
                              </h5>
                              <h6 className="mt-3 font-medium leading-none text-slate-500">
                                h6. Heading 6
                              </h6>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div>
                <h1 className="text-4xl font-medium leading-none">h1. Heading 1</h1>
                <h2 className="mt-3 text-3xl font-medium leading-none">
                  h2. Heading 2
                </h2>
                <h3 className="mt-3 text-2xl font-medium leading-none">
                  h3. Heading 3
                </h3>
                <h4 className="mt-3 text-xl font-medium leading-none">
                  h4. Heading 4
                </h4>
                <h5 className="mt-3 text-lg font-medium leading-none">
                  h5. Heading 5
                </h5>
                <h6 className="mt-3 font-medium leading-none">h6. Heading 6</h6>
              </div>
              <div className="mt-5">
                <h1 className="text-4xl font-medium leading-none text-primary">
                  h1. Heading 1
                </h1>
                <h2
                  className="mt-3 text-3xl font-medium leading-none text-slate-600 dark:text-slate-500"
                >
                  h2. Heading 2
                </h2>
                <h3 className="mt-3 text-2xl font-medium leading-none text-success">
                  h3. Heading 3
                </h3>
                <h4 className="mt-3 text-xl font-medium leading-none text-warning">
                  h4. Heading 4
                </h4>
                <h5 className="mt-3 text-lg font-medium leading-none text-danger">
                  h5. Heading 5
                </h5>
                <h6 className="mt-3 font-medium leading-none text-slate-500">
                  h6. Heading 6
                </h6>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Headings play a crucial role in structuring and
                        organizing your content. By using headings effectively
                        and consistently, you can improve the accessibility and
                        readability of your application. Remember to choose the
                        appropriate heading level, keep headings semantic, and
                        follow accessibility best practices for a better user
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
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Text Settings
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
                        Text settings and styles are essential for ensuring that
                        your content is both visually appealing and easy to
                        read. This section covers how to apply various text
                        settings to your content.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              <div className="font-normal">Example text</div>
                              <div className="font-medium">
                                Example medium text
                              </div>
                              <div className="font-semibold">
                                Example semibold text
                              </div>
                              <div className="font-bold">
                                Example bolder text
                              </div>
                              <div className="font-extrabold">
                                Example boldest text
                              </div>
                            </div>
                            <div className="mt-5">
                              <div className="uppercase">
                                Example uppercase text
                              </div>
                              <div className="lowercase">
                                Example lowercase text
                              </div>
                              <div className="capitalize">
                                Example capitalized text
                              </div>
                              <div className="normal-case">
                                Example cursive text
                              </div>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div>
                <div className="font-normal">Example text</div>
                <div className="font-medium">Example medium text</div>
                <div className="font-semibold">Example semibold text</div>
                <div className="font-bold">Example bolder text</div>
                <div className="font-extrabold">Example boldest text</div>
              </div>
              <div className="mt-5">
                <div className="uppercase">Example uppercase text</div>
                <div className="lowercase">Example lowercase text</div>
                <div className="capitalize">Example capitalized text</div>
                <div className="normal-case">Example cursive text</div>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Customizing text settings is crucial for creating
                        visually appealing and readable content. By adjusting
                        font size, line height, color, font family, text
                        alignment, and text decoration, you can tailor your text
                        to suit your application's design and improve the user
                        experience. Remember to maintain consistency in your
                        text settings throughout your application for a polished
                        look.
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
                        Common Elements
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
                        Common HTML elements are often used to style or convey
                        special meanings within your content. This section
                        covers some common HTML elements that can be used to
                        enhance the presentation of your text-based content.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              You can use the mark tag to
                              <mark className="p-1 bg-yellow-200">
                                highlight
                              </mark>{" "}
                              text.
                            </div>
                            <del className="block mt-1">
                              This line of text is meant to be treated as
                              deleted text.
                            </del>
                            <s className="block mt-1">
                              This line of text is meant to be treated as no
                              longer accurate.
                            </s>
                            <ins className="block mt-1">
                              This line of text is meant to be treated as an
                              addition to the document.
                            </ins>
                            <u className="block mt-1">
                              This line of text will render as underlined
                            </u>
                            <small className="block mt-1">
                              This line of text is meant to be treated as fine
                              print.
                            </small>
                            <strong className="block mt-1">
                              This line rendered as bold text.
                            </strong>
                            <em className="block mt-1">
                              This line rendered as italicized text.
                            </em>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div>
                You can use the mark tag to
                <mark className="p-1 bg-yellow-200">highlight</mark> text.
              </div>
              <del className="block mt-1"
                >This line of text is meant to be treated as deleted text.</del
              >
              <s className="block mt-1"
                >This line of text is meant to be treated as no longer
                accurate.</s
              >
              <ins className="block mt-1"
                >This line of text is meant to be treated as an addition to the
                document.</ins
              >
              <u className="block mt-1"
                >This line of text will render as underlined</u
              >
              <small className="block mt-1"
                >This line of text is meant to be treated as fine print.</small
              >
              <strong className="block mt-1"
                >This line rendered as bold text.</strong
              >
              <em className="block mt-1">This line rendered as italicized text.</em>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        These common HTML elements provide you with a range of
                        tools to enhance the styling and meaning of your
                        text-based content. By using these elements
                        appropriately, you can improve the readability and
                        visual presentation of your content while conveying
                        specific meanings or emphasis where needed.
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
                      <div className="text-[0.94rem] font-medium">Badges</div>
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
                        Badges are small, informative components used to
                        visually represent status, notifications, or other
                        metadata in a concise manner. This section covers how to
                        use badges effectively in your web applications.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="font-medium">Basic Badge</div>
                            <div className="mt-2">
                              <span className="px-1 mr-1 text-xs text-white rounded-full bg-primary">
                                1
                              </span>
                              <span className="px-1 mr-1 text-xs border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                                2
                              </span>
                              <span className="px-1 mr-1 text-xs text-white rounded-full bg-success">
                                3
                              </span>
                              <span className="px-1 mr-1 text-xs text-white rounded-full bg-warning">
                                4
                              </span>
                              <span className="px-1 mr-1 text-xs text-white rounded-full bg-danger">
                                5
                              </span>
                              <span className="px-1 mr-1 text-xs rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                                6
                              </span>
                            </div>
                            <div className="mt-6 font-medium">Badge Sizes</div>
                            <div className="mt-3">
                              <span className="px-2 py-1 mr-1 text-white rounded-full bg-primary">
                                1
                              </span>
                              <span className="px-2 py-1 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                                2
                              </span>
                              <span className="px-2 py-1 mr-1 text-white rounded-full bg-success">
                                3
                              </span>
                              <span className="px-2 py-1 mr-1 text-white rounded-full bg-warning">
                                4
                              </span>
                              <span className="px-2 py-1 mr-1 text-white rounded-full bg-danger">
                                5
                              </span>
                              <span className="px-2 py-1 mr-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                                6
                              </span>
                            </div>
                            <div className="mt-4">
                              <span className="px-3 py-2 mr-1 text-white rounded-full bg-primary">
                                1
                              </span>
                              <span className="px-3 py-2 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                                2
                              </span>
                              <span className="px-3 py-2 mr-1 text-white rounded-full bg-success">
                                3
                              </span>
                              <span className="px-3 py-2 mr-1 text-white rounded-full bg-warning">
                                4
                              </span>
                              <span className="px-3 py-2 mr-1 text-white rounded-full bg-danger">
                                5
                              </span>
                              <span className="px-3 py-2 mr-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                                6
                              </span>
                            </div>
                            <div className="mt-6">
                              <span className="px-4 py-3 mr-1 text-white rounded-full bg-primary">
                                1
                              </span>
                              <span className="px-4 py-3 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                                2
                              </span>
                              <span className="px-4 py-3 mr-1 text-white rounded-full bg-success">
                                3
                              </span>
                              <span className="px-4 py-3 mr-1 text-white rounded-full bg-warning">
                                4
                              </span>
                              <span className="px-4 py-3 mr-1 text-white rounded-full bg-danger">
                                5
                              </span>
                              <span className="px-4 py-3 mr-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                                6
                              </span>
                            </div>
                            <div className="mt-10 font-medium">
                              Square Badge
                            </div>
                            <div className="mt-2">
                              <span className="px-1 mr-1 text-xs text-white bg-primary">
                                1
                              </span>
                              <span className="px-1 mr-1 text-xs border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                                2
                              </span>
                              <span className="px-1 mr-1 text-xs text-white bg-success">
                                3
                              </span>
                              <span className="px-1 mr-1 text-xs text-white bg-warning">
                                4
                              </span>
                              <span className="px-1 mr-1 text-xs text-white bg-danger">
                                5
                              </span>
                              <span className="px-1 mr-1 text-xs bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300">
                                6
                              </span>
                            </div>
                            <div className="mt-6 font-medium">
                              Outline Badge
                            </div>
                            <div className="mt-4">
                              <span className="px-3 py-2 mr-1 border rounded-full border-primary text-primary dark:border-primary">
                                1
                              </span>
                              <span className="px-3 py-2 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300">
                                2
                              </span>
                              <span className="px-3 py-2 mr-1 border rounded-full border-success text-success dark:border-success">
                                3
                              </span>
                              <span className="px-3 py-2 mr-1 border rounded-full border-warning text-warning dark:border-warning">
                                4
                              </span>
                              <span className="px-3 py-2 mr-1 border rounded-full border-danger text-danger dark:border-danger">
                                5
                              </span>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div className="font-medium">Basic Badge</div>
              <div className="mt-2">
                <span
                  className="px-1 mr-1 text-xs text-white rounded-full bg-primary"
                  >1</span
                >
                <span
                  className="px-1 mr-1 text-xs border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span
                  className="px-1 mr-1 text-xs text-white rounded-full bg-success"
                  >3</span
                >
                <span
                  className="px-1 mr-1 text-xs text-white rounded-full bg-warning"
                  >4</span
                >
                <span
                  className="px-1 mr-1 text-xs text-white rounded-full bg-danger"
                  >5</span
                >
                <span
                  className="px-1 mr-1 text-xs rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-6 font-medium">Badge Sizes</div>
              <div className="mt-3">
                <span className="px-2 py-1 mr-1 text-white rounded-full bg-primary"
                  >1</span
                >
                <span
                  className="px-2 py-1 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span className="px-2 py-1 mr-1 text-white rounded-full bg-success"
                  >3</span
                >
                <span className="px-2 py-1 mr-1 text-white rounded-full bg-warning"
                  >4</span
                >
                <span className="px-2 py-1 mr-1 text-white rounded-full bg-danger"
                  >5</span
                >
                <span
                  className="px-2 py-1 mr-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-4">
                <span className="px-3 py-2 mr-1 text-white rounded-full bg-primary"
                  >1</span
                >
                <span
                  className="px-3 py-2 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span className="px-3 py-2 mr-1 text-white rounded-full bg-success"
                  >3</span
                >
                <span className="px-3 py-2 mr-1 text-white rounded-full bg-warning"
                  >4</span
                >
                <span className="px-3 py-2 mr-1 text-white rounded-full bg-danger"
                  >5</span
                >
                <span
                  className="px-3 py-2 mr-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-6">
                <span className="px-4 py-3 mr-1 text-white rounded-full bg-primary"
                  >1</span
                >
                <span
                  className="px-4 py-3 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span className="px-4 py-3 mr-1 text-white rounded-full bg-success"
                  >3</span
                >
                <span className="px-4 py-3 mr-1 text-white rounded-full bg-warning"
                  >4</span
                >
                <span className="px-4 py-3 mr-1 text-white rounded-full bg-danger"
                  >5</span
                >
                <span
                  className="px-4 py-3 mr-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-10 font-medium">Square Badge</div>
              <div className="mt-2">
                <span className="px-1 mr-1 text-xs text-white bg-primary">1</span>
                <span
                  className="px-1 mr-1 text-xs border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span className="px-1 mr-1 text-xs text-white bg-success">3</span>
                <span className="px-1 mr-1 text-xs text-white bg-warning">4</span>
                <span className="px-1 mr-1 text-xs text-white bg-danger">5</span>
                <span
                  className="px-1 mr-1 text-xs bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300"
                  >6</span
                >
              </div>
              <div className="mt-6 font-medium">Outline Badge</div>
              <div className="mt-4">
                <span
                  className="px-3 py-2 mr-1 border rounded-full border-primary text-primary dark:border-primary"
                  >1</span
                >
                <span
                  className="px-3 py-2 mr-1 border rounded-full text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300"
                  >2</span
                >
                <span
                  className="px-3 py-2 mr-1 border rounded-full border-success text-success dark:border-success"
                  >3</span
                >
                <span
                  className="px-3 py-2 mr-1 border rounded-full border-warning text-warning dark:border-warning"
                  >4</span
                >
                <span
                  className="px-3 py-2 mr-1 border rounded-full border-danger text-danger dark:border-danger"
                  >5</span
                >
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Badges are versatile components that can help you convey
                        important information or highlight specific elements in
                        your application. By using different variants, icons,
                        counts, and custom styling, you can create badges that
                        fit seamlessly into your design and improve user
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
                    <div className="flex flex-col pb-5 mb-5 border-b border-dashed sm:items-center sm:flex-row border-slate-300/70">
                      <div className="text-[0.94rem] font-medium">
                        Separator
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
                        Separators are used to create visual divisions or
                        spacing between elements in a user interface. They help
                        improve the overall layout and readability of a page.
                        This section covers various ways to use separators
                        effectively in your web applications.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="w-full border-t border-dashed border-slate-200/60 dark:border-darkmode-400"></div>
                            <div className="w-full mt-5 border-t border-slate-200/60 dark:border-darkmode-400"></div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div
                className="w-full border-t border-dashed border-slate-200/60 dark:border-darkmode-400"
              ></div>
              <div
                className="w-full mt-5 border-t border-slate-200/60 dark:border-darkmode-400"
              ></div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Separators play a crucial role in improving the layout
                        and readability of your web pages. They can help create
                        a clear visual hierarchy and enhance the overall user
                        experience. By using different types of separators and
                        custom styles, you can tailor them to match your
                        application's design and effectively structure your
                        content.
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
                      <div className="text-[0.94rem] font-medium">Divider</div>
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
                        Dividers are used to create clear visual separations
                        between sections or content on a webpage. They help
                        improve the overall structure and organization of a
                        page. This section covers various ways to use dividers
                        effectively in your web applications.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div className="flex justify-center w-full mt-2 border-t border-slate-200/60 dark:border-darkmode-400">
                              <div className="px-5 -mt-3 bg-white dark:bg-darkmode-600 text-slate-500">
                                or
                              </div>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div
                className="flex justify-center w-full mt-2 border-t border-slate-200/60 dark:border-darkmode-400"
              >
                <div
                  className="px-5 -mt-3 bg-white dark:bg-darkmode-600 text-slate-500"
                >
                  or
                </div>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Dividers are essential for maintaining a well-structured
                        layout in your web applications. They help create a
                        clear visual hierarchy and enhance the overall user
                        experience by providing a sense of organization and
                        separation between content sections.
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
                      <div className="text-[0.94rem] font-medium">Links</div>
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
                        Links are a fundamental part of web development and
                        navigation. They allow users to navigate between
                        different pages or resources on the internet. This
                        section covers the usage of links in web development and
                        provides examples of how to create and style links
                        effectively.
                      </p>
                      <div className="border rounded-[0.6rem] dark:border-darkmode-400 relative mt-7 mb-4 border-slate-200/80">
                        <div className="absolute left-0 px-3 ml-4 -mt-2 text-xs uppercase bg-white text-slate-500 dark:bg-darkmode-600">
                          <div className="-mt-px">Example code / preview</div>
                        </div>
                        <div className="px-5 py-2 mt-4 flex flex-col gap-3.5">
                          <Preview>
                            <div>
                              <a
                                href=""
                                className="block font-normal text-primary"
                              >
                                Example text
                              </a>
                              <a
                                href=""
                                className="block font-medium text-primary"
                              >
                                Example medium text
                              </a>
                              <a
                                href=""
                                className="block font-semibold text-primary"
                              >
                                Example semibold text
                              </a>
                              <a
                                href=""
                                className="block font-bold text-primary"
                              >
                                Example bolder text
                              </a>
                              <a
                                href=""
                                className="block font-extrabold text-primary"
                              >
                                Example boldest text
                              </a>
                            </div>
                            <div className="mt-5">
                              <a href="" className="block text-primary">
                                Primary state
                              </a>
                              <a
                                href=""
                                className="block text-slate-600 dark:text-slate-500"
                              >
                                Secondary state
                              </a>
                              <a href="" className="block text-success">
                                Success state
                              </a>
                              <a href="" className="block text-warning">
                                Warning state
                              </a>
                              <a href="" className="block text-danger">
                                Danger state
                              </a>
                            </div>
                          </Preview>
                          <Source>
                            <Highlight>
                              {`
              <div>
                <a href="" className="block font-normal text-primary"
                  >Example text</a
                >
                <a href="" className="block font-medium text-primary"
                  >Example medium text</a
                >
                <a href="" className="block font-semibold text-primary"
                  >Example semibold text</a
                >
                <a href="" className="block font-bold text-primary"
                  >Example bolder text</a
                >
                <a href="" className="block font-extrabold text-primary"
                  >Example boldest text</a
                >
              </div>
              <div className="mt-5">
                <a href="" className="block text-primary">Primary state</a>
                <a href="" className="block text-slate-600 dark:text-slate-500"
                  >Secondary state</a
                >
                <a href="" className="block text-success">Success state</a>
                <a href="" className="block text-warning">Warning state</a>
                <a href="" className="block text-danger">Danger state</a>
              </div>
              `}
                            </Highlight>
                          </Source>
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Links are a crucial part of web development, allowing
                        users to navigate between different pages and resources.
                        Understanding how to create and style links effectively
                        is essential for providing a smooth and user-friendly
                        browsing experience. By using proper HTML syntax and CSS
                        styling, you can make your links visually appealing and
                        functional, enhancing the overall user experience on
                        your website or web application.
                      </p>
                    </div>
                  </>
                )}
              </PreviewComponent>
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
                    Heading
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Text Settings
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Common Elements
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Badges
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Separator
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Divider
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Links
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
