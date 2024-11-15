import Lucide from "@/components/Base/Lucide";
import TomSelect from "@/components/Base/TomSelect";
import { ClassicEditor } from "@/components/Base/Ckeditor";
import {
  FormLabel,
  FormCheck,
  FormInput,
  FormInline,
  FormSelect,
  FormSwitch,
  InputGroup,
  FormHelp,
} from "@/components/Base/Form";
import Alert from "@/components/Base/Alert";
import Tippy from "@/components/Base/Tippy";
import products from "@/fakers/products";
import categories from "@/fakers/categories";
import Button from "@/components/Base/Button";
import Table from "@/components/Base/Table";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  const [subcategory, setSubcategory] = useState(["0"]);
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col mt-4 md:mt-0 md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Add Product
          </div>
        </div>
        <div className="mt-3.5 grid grid-cols-12 xl:grid-cols-10 gap-y-7 lg:gap-y-10 gap-x-6">
          <div className="relative flex flex-col col-span-12 lg:col-span-9 xl:col-span-8 gap-y-7">
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] mr-2"
                  />{" "}
                  Product Information
                </div>
                <div className="mt-5">
                  <Alert
                    variant="outline-warning"
                    className="flex items-center px-4 mb-2 bg-warning/5 border-warning/30"
                  >
                    {({ dismiss }) => (
                      <>
                        <div>
                          <Lucide
                            icon="Lightbulb"
                            className="stroke-[1.3] w-4 h-4 mr-3 2xl:mr-2"
                          />
                        </div>
                        <div className="mr-5 leading-relaxed">
                          Avoid selling counterfeit products / violating
                          Intellectual Property Rights, so that your products
                          are not deleted.
                          <a
                            href=""
                            className="ml-1 font-medium underline decoration-dotted decoration-warning/50 underline-offset-[3px]"
                          >
                            Learn More
                          </a>
                          <Alert.DismissButton
                            type="button"
                            className="inset-y-0 btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Alert.DismissButton>
                        </div>
                      </>
                    )}
                  </Alert>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Product Name</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter the unique name of your product. Make it
                          descriptive and easy to remember for customers.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput type="text" placeholder="Product name" />
                      <FormHelp>Maximum character 0/70</FormHelp>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Category</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Select the primary category that best represents your
                          product. This helps customers find your product more
                          easily.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSelect id="category">
                        {categories.fakeCategories().map((faker, fakerKey) => (
                          <option key={fakerKey} value={fakerKey}>
                            {faker.name}
                          </option>
                        ))}
                      </FormSelect>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Subcategory</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Choose a more specific subcategory that closely
                          matches your product. It provides further details
                          about your item.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <TomSelect
                        value={subcategory}
                        onChange={(e) => {
                          setSubcategory(e.target.value);
                        }}
                        options={{
                          placeholder: "Etalase",
                        }}
                        className="w-full"
                        multiple
                      >
                        {categories.fakeCategories().map((faker, fakerKey) => (
                          <option key={fakerKey} value={fakerKey}>
                            {faker.name}
                          </option>
                        ))}
                      </TomSelect>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/80 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/80 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] mr-2"
                  />{" "}
                  Upload Product
                </div>
                <div className="mt-5">
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Product Photos</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          High-quality images can significantly impact your
                          product's appeal. Upload clear, well-lit photos that
                          showcase your item from different angles and
                          perspectives.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="border border-dashed rounded-md border-slate-300/80">
                        <div className="grid grid-cols-9 gap-5 px-5 pt-5 sm:grid-cols-10">
                          {_.take(products.fakeProducts(), 5).map(
                            (faker, fakerKey) => (
                              <div
                                key={fakerKey}
                                className="relative h-24 col-span-3 cursor-pointer md:col-span-2 image-fit zoom-in"
                              >
                                <img
                                  className="rounded-lg"
                                  alt="Tailwise - Admin Dashboard Template"
                                  src={faker.images[0].path}
                                />
                                <Tippy
                                  content="Remove this image?"
                                  className="absolute top-0 right-0 w-5 h-5 -mt-2 -mr-2 bg-white rounded-full"
                                >
                                  <div className="flex items-center justify-center w-full h-full text-white border rounded-full bg-danger/80 border-danger/50">
                                    <Lucide
                                      icon="X"
                                      className="w-4 h-4 stroke-[1.3]"
                                    />
                                  </div>
                                </Tippy>
                              </div>
                            )
                          )}
                        </div>
                        <div className="relative flex items-center justify-center px-4 pb-4 mt-5 cursor-pointer">
                          <Lucide icon="Image" className="w-4 h-4 mr-2" />
                          <span className="mr-1 text-primary">
                            Upload a file
                          </span>{" "}
                          or drag and drop
                          <FormInput
                            id="horizontal-form-1"
                            type="file"
                            className="absolute top-0 left-0 w-full h-full opacity-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] mr-2"
                  />{" "}
                  Product Details
                </div>
                <div className="mt-5">
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Condition</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Accurately select the condition of your product to set
                          clear expectations for buyers.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col sm:flex-row">
                        <FormCheck className="mr-4">
                          <FormCheck.Input
                            id="condition-new"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-chris-evans"
                          />
                          <FormCheck.Label htmlFor="condition-new">
                            New
                          </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="mt-2 mr-4 sm:mt-0">
                          <FormCheck.Input
                            id="condition-second"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-liam-neeson"
                          />
                          <FormCheck.Label htmlFor="condition-second">
                            Second
                          </FormCheck.Label>
                        </FormCheck>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Product Description</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Craft a comprehensive description that highlights the
                          unique features, benefits, and specifications of your
                          product.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <ClassicEditor
                        value={editorData}
                        onChange={setEditorData}
                      />
                      <FormHelp className="text-right">
                        Maximum character 0/2000
                      </FormHelp>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Product Video</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Add a video showcasing your product in action.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <Button
                        variant="outline-primary"
                        className="w-40 border-primary/50"
                      >
                        <Lucide
                          icon="Camera"
                          className="stroke-[1.3] w-4 h-4 mr-2"
                        />{" "}
                        Add Video URL
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] mr-2"
                  />{" "}
                  Product Details
                </div>
                <div className="mt-5">
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Product Variant</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter your full legal name as it appears on your
                          official identification.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <Button
                        variant="outline-primary"
                        className="w-40 border-primary/50"
                      >
                        <Lucide
                          icon="KanbanSquare"
                          className="stroke-[1.3] w-4 h-4 mr-2 -ml-0.5"
                        />{" "}
                        Add Variant
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] mr-2"
                  />{" "}
                  Product Variant (Details)
                </div>
                <div className="mt-5">
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Variant 1</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Specify different variations of your product, such as
                          size, color, or style.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="relative py-10 pl-5 pr-5 border rounded-md xl:pr-10 bg-slate-50/80 border-slate-200/80 dark:bg-transparent dark:border">
                        <a
                          href=""
                          className="absolute top-0 right-0 mt-4 mr-4 text-slate-500"
                        >
                          <Lucide icon="X" className="w-5 h-5" />
                        </a>
                        <div>
                          <FormInline className="mt-5 first:mt-0">
                            <FormLabel className="sm:w-20">Name</FormLabel>
                            <div className="flex items-center flex-1 xl:pr-20">
                              <InputGroup className="flex-1">
                                <FormInput type="text" placeholder="Size" />
                                <InputGroup.Text>6/14</InputGroup.Text>
                              </InputGroup>
                            </div>
                          </FormInline>
                          <FormInline className="items-start mt-5 first:mt-0">
                            <FormLabel className="mt-2 sm:w-20">
                              Options
                            </FormLabel>
                            <div className="flex-1">
                              <div className="items-center mt-5 xl:flex first:mt-0">
                                <InputGroup className="flex-1">
                                  <FormInput type="text" placeholder="Small" />
                                  <InputGroup.Text>6/14</InputGroup.Text>
                                </InputGroup>
                                <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                  <a href="" className="xl:ml-5">
                                    <Lucide icon="Move" className="w-4 h-4" />
                                  </a>
                                  <a href="" className="ml-3 xl:ml-5">
                                    <Lucide icon="Trash2" className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                              <div className="items-center mt-5 xl:flex first:mt-0">
                                <InputGroup className="flex-1">
                                  <FormInput type="text" placeholder="Medium" />
                                  <InputGroup.Text>6/14</InputGroup.Text>
                                </InputGroup>
                                <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                  <a href="" className="xl:ml-5">
                                    <Lucide icon="Move" className="w-4 h-4" />
                                  </a>
                                  <a href="" className="ml-3 xl:ml-5">
                                    <Lucide icon="Trash2" className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                              <div className="items-center mt-5 xl:flex first:mt-0">
                                <InputGroup className="flex-1">
                                  <FormInput type="text" placeholder="Large" />
                                  <InputGroup.Text>6/14</InputGroup.Text>
                                </InputGroup>
                                <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                  <a href="" className="xl:ml-5">
                                    <Lucide icon="Move" className="w-4 h-4" />
                                  </a>
                                  <a href="" className="ml-3 xl:ml-5">
                                    <Lucide icon="Trash2" className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </FormInline>
                          <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                            <Button
                              variant="outline-primary"
                              className="w-full border-dashed"
                            >
                              <Lucide
                                icon="Plus"
                                className="w-4 h-4 mr-2 stroke-[1.3]"
                              />{" "}
                              Add New Option
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-2 mt-2 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Variant 2</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Specify different variations of your product, such as
                          size, color, or style.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="relative py-10 pl-5 pr-5 border rounded-md xl:pr-10 bg-slate-50/80 border-slate-200/80 dark:bg-transparent dark:border">
                        <a
                          href=""
                          className="absolute top-0 right-0 mt-4 mr-4 text-slate-500"
                        >
                          <Lucide icon="X" className="w-5 h-5" />
                        </a>
                        <div>
                          <FormInline className="mt-5 first:mt-0">
                            <FormLabel className="sm:w-20">Name</FormLabel>
                            <div className="flex items-center flex-1 xl:pr-20">
                              <InputGroup className="flex-1">
                                <FormInput type="text" placeholder="Size" />
                                <InputGroup.Text>6/14</InputGroup.Text>
                              </InputGroup>
                            </div>
                          </FormInline>
                          <FormInline className="items-start mt-5 first:mt-0">
                            <FormLabel className="mt-2 sm:w-20">
                              Options
                            </FormLabel>
                            <div className="flex-1">
                              <div className="items-center mt-5 xl:flex first:mt-0">
                                <InputGroup className="flex-1">
                                  <FormInput type="text" placeholder="Small" />
                                  <InputGroup.Text>6/14</InputGroup.Text>
                                </InputGroup>
                                <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                  <a href="" className="xl:ml-5">
                                    <Lucide icon="Move" className="w-4 h-4" />
                                  </a>
                                  <a href="" className="ml-3 xl:ml-5">
                                    <Lucide icon="Trash2" className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                              <div className="items-center mt-5 xl:flex first:mt-0">
                                <InputGroup className="flex-1">
                                  <FormInput type="text" placeholder="Medium" />
                                  <InputGroup.Text>6/14</InputGroup.Text>
                                </InputGroup>
                                <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                  <a href="" className="xl:ml-5">
                                    <Lucide icon="Move" className="w-4 h-4" />
                                  </a>
                                  <a href="" className="ml-3 xl:ml-5">
                                    <Lucide icon="Trash2" className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                              <div className="items-center mt-5 xl:flex first:mt-0">
                                <InputGroup className="flex-1">
                                  <FormInput type="text" placeholder="Large" />
                                  <InputGroup.Text>6/14</InputGroup.Text>
                                </InputGroup>
                                <div className="flex w-20 mt-3 text-slate-500 xl:mt-0">
                                  <a href="" className="xl:ml-5">
                                    <Lucide icon="Move" className="w-4 h-4" />
                                  </a>
                                  <a href="" className="ml-3 xl:ml-5">
                                    <Lucide icon="Trash2" className="w-4 h-4" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </FormInline>
                          <div className="mt-5 xl:ml-20 xl:pl-5 xl:pr-20 first:mt-0">
                            <Button
                              variant="outline-primary"
                              className="w-full border-dashed"
                            >
                              <Lucide
                                icon="Plus"
                                className="w-4 h-4 mr-2 stroke-[1.3]"
                              />{" "}
                              Add New Option
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 mt-2 xl:ml-60 xl:pl-14 first:mt-0 first:pt-0">
                    <Button
                      variant="outline-secondary"
                      className="w-full py-3 bg-slate-50/80 border-slate-200/80 dark:bg-darkmode-400"
                    >
                      <Lucide
                        icon="Plus"
                        className="w-4 h-4 mr-2 stroke-[1.3]"
                      />{" "}
                      Add New Variant
                    </Button>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Variant Information</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Use this section to specify the various options,
                          configurations, or variants available for your
                          product.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="grid-cols-4 gap-2 sm:grid">
                        <InputGroup>
                          <InputGroup.Text>$</InputGroup.Text>
                          <FormInput type="text" placeholder="Price" />
                        </InputGroup>
                        <FormInput
                          type="text"
                          className="mt-2 sm:mt-0"
                          placeholder="Stock"
                        />
                        <FormInput
                          type="text"
                          className="mt-2 sm:mt-0"
                          placeholder="Variant Code"
                        />
                        <Button
                          variant="outline-primary"
                          className="mt-2 border-primary/50 bg-primary/5 sm:mt-0"
                        >
                          Apply To All
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Variant List</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Use this section to showcase the different product
                          variants, options, or configurations available to
                          customers.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="overflow-x-auto">
                        <Table className="border">
                          <Table.Thead>
                            <Table.Tr>
                              <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                                Size
                              </Table.Th>
                              <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                                <div className="flex items-center">
                                  Color{" "}
                                  <Lucide
                                    icon="HelpCircle"
                                    className="w-4 h-4 ml-2"
                                  />
                                </div>
                              </Table.Th>
                              <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !px-2">
                                Price
                              </Table.Th>
                              <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !px-2">
                                <div className="flex items-center">
                                  <div className="relative w-4 h-4 mr-2 -mt-0.5 before:content-[''] before:absolute before:w-4 before:h-4 before:bg-primary/20 before:rounded-full lg:before:animate-ping after:content-[''] after:absolute after:w-4 after:h-4 after:bg-primary after:rounded-full after:border-4 after:border-white/60 after:dark:border-darkmode-300"></div>
                                  Stock{" "}
                                  <Lucide
                                    icon="HelpCircle"
                                    className="w-4 h-4 ml-2"
                                  />
                                </div>
                              </Table.Th>
                              <Table.Th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !pl-2">
                                Variant Code
                              </Table.Th>
                            </Table.Tr>
                          </Table.Thead>
                          <Table.Tbody>
                            <Table.Tr>
                              <Table.Td rowSpan={3} className="border-r">
                                Small
                              </Table.Td>
                              <Table.Td>Black</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="Price"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Stock"
                                />
                              </Table.Td>
                              <Table.Td className="!pl-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Variant Code"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td>White</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="Price"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Stock"
                                />
                              </Table.Td>
                              <Table.Td className="!pl-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Variant Code"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td>Gray</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="Price"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Stock"
                                />
                              </Table.Td>
                              <Table.Td className="!pl-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Variant Code"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td rowSpan={3} className="border-r">
                                Medium
                              </Table.Td>
                              <Table.Td>Black</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="Price"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Stock"
                                />
                              </Table.Td>
                              <Table.Td className="!pl-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Variant Code"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td>White</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="Price"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Stock"
                                />
                              </Table.Td>
                              <Table.Td className="!pl-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Variant Code"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td>Gray</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="Price"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Stock"
                                />
                              </Table.Td>
                              <Table.Td className="!pl-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Variant Code"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td rowSpan={3} className="border-r">
                                Large
                              </Table.Td>
                              <Table.Td>Black</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="Price"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Stock"
                                />
                              </Table.Td>
                              <Table.Td className="!pl-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Variant Code"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td>White</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="Price"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Stock"
                                />
                              </Table.Td>
                              <Table.Td className="!pl-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Variant Code"
                                />
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td>Gray</Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="Price"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Stock"
                                />
                              </Table.Td>
                              <Table.Td className="!pl-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Variant Code"
                                />
                              </Table.Td>
                            </Table.Tr>
                          </Table.Tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Wholesale Price</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Set the discounted price for purchasing products in
                          larger quantities.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="overflow-x-auto">
                        <Table className="border">
                          <Table.Thead>
                            <Table.Tr>
                              <Table.Th className="!pr-2 bg-slate-50 dark:bg-darkmode-800"></Table.Th>
                              <Table.Th className="bg-slate-50 dark:bg-darkmode-800"></Table.Th>
                              <Table.Th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                                Min.
                              </Table.Th>
                              <Table.Th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                                Max.
                              </Table.Th>
                              <Table.Th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                                Unit Price
                              </Table.Th>
                              <Table.Th className="!px-2 bg-slate-50 dark:bg-darkmode-800"></Table.Th>
                            </Table.Tr>
                          </Table.Thead>
                          <Table.Tbody>
                            <Table.Tr>
                              <Table.Td className="!pr-2">1.</Table.Td>
                              <Table.Td className="whitespace-nowrap">
                                Wholesale Price 1
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Min Qty"
                                />
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Max Qty"
                                />
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="Price"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!pl-4 text-slate-500">
                                <a href="">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td className="!pr-2">2.</Table.Td>
                              <Table.Td className="whitespace-nowrap">
                                Wholesale Price 2
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Min Qty"
                                />
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Max Qty"
                                />
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="Price"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!pl-4 text-slate-500">
                                <a href="">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </Table.Td>
                            </Table.Tr>
                            <Table.Tr>
                              <Table.Td className="!pr-2">3.</Table.Td>
                              <Table.Td className="whitespace-nowrap">
                                Wholesale Price 3
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Min Qty"
                                />
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <FormInput
                                  type="text"
                                  className="min-w-[6rem]"
                                  placeholder="Max Qty"
                                />
                              </Table.Td>
                              <Table.Td className="!px-2">
                                <InputGroup>
                                  <InputGroup.Text>$</InputGroup.Text>
                                  <FormInput
                                    type="text"
                                    className="min-w-[6rem]"
                                    placeholder="Price"
                                  />
                                </InputGroup>
                              </Table.Td>
                              <Table.Td className="!pl-4 text-slate-500">
                                <a href="">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </Table.Td>
                            </Table.Tr>
                          </Table.Tbody>
                        </Table>
                      </div>
                      <Button
                        variant="outline-primary"
                        className="w-full mt-4 border-dashed"
                      >
                        <Lucide
                          icon="Plus"
                          className="w-4 h-4 mr-2 stroke-[1.3]"
                        />{" "}
                        Add New Wholesale Price
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] mr-2"
                  />{" "}
                  Product Management
                </div>
                <div className="mt-5">
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Product Status</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Choose the status that best reflects the availability
                          of this product for customers.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSwitch>
                        <FormSwitch.Input
                          id="product-status-active"
                          type="checkbox"
                        />
                        <FormSwitch.Label htmlFor="product-status-active">
                          Active
                        </FormSwitch.Label>
                      </FormSwitch>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Product Stock</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter the total quantity of this product currently in
                          stock.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput
                        id="product-stock"
                        type="text"
                        placeholder="Input Product Stock"
                      />
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Stock Keeping Unit</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter a distinct identifier for this product in your
                          inventory.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormInput id="sku" type="text" placeholder="Input SKU" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-5 box box--stacked">
              <div className="p-5 border rounded-[0.6rem] border-slate-200/60 dark:border-darkmode-400">
                <div className="flex items-center pb-5 text-[0.94rem] font-medium border-b border-slate-200/60 dark:border-darkmode-400">
                  <Lucide
                    icon="ChevronDown"
                    className="w-5 h-5 stroke-[1.3] mr-2"
                  />{" "}
                  Shipping
                </div>
                <div className="mt-5">
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Product Weight</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter the weight of the product in the preferred unit
                          of measurement (e.g., pounds, kilograms, ounces).
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="grid-cols-4 gap-2 sm:grid">
                        <FormSelect>
                          <option value="Gram (g)">Gram (g)</option>
                          <option value="Kilogram (kg)">Kilogram (kg)</option>
                        </FormSelect>
                        <FormInput
                          type="text"
                          id="product-weight"
                          className="mt-2 sm:mt-0"
                          placeholder="Stock"
                        />
                      </div>
                      <Alert
                        variant="outline-primary"
                        className="flex items-center px-4 mt-5 mb-2 bg-primary/5 border-primary/20"
                      >
                        {({ dismiss }) => (
                          <>
                            <Lucide
                              icon="AlertTriangle"
                              className="w-[1.15rem] h-[1.15rem] mr-3"
                            />{" "}
                            <div className="mr-5 leading-relaxed">
                              Pay close attention to the weight of the product
                              so that there is no difference in data with the
                              shipping courier.{" "}
                              <a
                                className="ml-1 font-medium underline decoration-dotted decoration-primary/50 underline-offset-[3px]"
                                href=""
                              >
                                Learn More
                              </a>
                            </div>
                            <Alert.DismissButton
                              type="button"
                              className="btn-close"
                              onClick={dismiss}
                              aria-label="Close"
                            >
                              <Lucide icon="X" className="w-4 h-4" />
                            </Alert.DismissButton>
                          </>
                        )}
                      </Alert>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Product Size</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter the dimensions or size of the product, including
                          length, width, and height, in the preferred unit
                          (e.g., inches, centimeters).
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="grid-cols-3 gap-2 sm:grid">
                        <InputGroup>
                          <FormInput type="text" placeholder="Width" />
                          <InputGroup.Text>cm</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mt-2 sm:mt-0">
                          <FormInput type="text" placeholder="Height" />
                          <InputGroup.Text>cm</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mt-2 sm:mt-0">
                          <FormInput type="text" placeholder="Length" />
                          <InputGroup.Text>cm</InputGroup.Text>
                        </InputGroup>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Shipping Insurance</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Indicate whether shipping insurance is offered for
                          this product to protect against loss or damage during
                          transit.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col gap-y-2 sm:flex-row">
                        <FormCheck className="mr-4">
                          <FormCheck.Input
                            id="shipping-insurance-required"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-chris-evans"
                          />
                          <FormCheck.Label>
                            <div className="font-medium">Required</div>
                            <div className="w-56 mt-1 text-xs leading-relaxed text-slate-500">
                              You{" "}
                              <span className="font-medium text-slate-600 dark:text-slate-300">
                                require
                              </span>{" "}
                              the buyer to activate shipping insurance
                            </div>
                          </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="mt-2 mr-4 sm:mt-0">
                          <FormCheck.Input
                            id="shipping-insurance-optional"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-liam-neeson"
                          />
                          <FormCheck.Label>
                            <div className="font-medium">Optional</div>
                            <div className="w-56 mt-1 text-xs leading-relaxed text-slate-500">
                              You{" "}
                              <span className="font-medium text-slate-600 dark:text-slate-300">
                                give the buyer the option
                              </span>{" "}
                              to activate shipping insurance
                            </div>
                          </FormCheck.Label>
                        </FormCheck>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Shipping Service</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enter the preferred shipping service or method for
                          delivering this product to customers.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <div className="flex flex-col sm:flex-row">
                        <FormCheck className="mr-4">
                          <FormCheck.Input
                            id="shipping-service-standard"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-chris-evans"
                          />
                          <FormCheck.Label htmlFor="shipping-service-standard">
                            Standard
                          </FormCheck.Label>
                        </FormCheck>
                        <FormCheck className="mt-2 mr-4 sm:mt-0">
                          <FormCheck.Input
                            id="shipping-service-custom"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-liam-neeson"
                          />
                          <FormCheck.Label htmlFor="shipping-service-custom">
                            Custom
                          </FormCheck.Label>
                        </FormCheck>
                      </div>
                      <div className="mt-3 text-xs leading-relaxed text-slate-500">
                        The delivery service for this product will be the same
                        as in the
                        <a className="ml-1 font-medium text-primary" href="">
                          Shipping Settings.
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                    <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                      <div className="text-left">
                        <div className="flex items-center">
                          <div className="font-medium">Pre Order</div>
                          <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                            Required
                          </div>
                        </div>
                        <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80 dark:text-slate-400">
                          Enable pre-order for this product if it's not yet
                          available, allowing customers to reserve it in
                          advance.
                        </div>
                      </div>
                    </label>
                    <div className="flex-1 w-full mt-3 xl:mt-0">
                      <FormSwitch>
                        <FormSwitch.Input
                          id="preorder-active"
                          type="checkbox"
                        />
                        <FormSwitch.Label
                          className="text-xs leading-relaxed text-slate-500"
                          htmlFor="preorder-active"
                        >
                          Activate PreOrder if you need a longer shipping
                          process.
                          <a className="ml-1 font-medium text-primary" href="">
                            Learn more.
                          </a>
                        </FormSwitch.Label>
                      </FormSwitch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-3 mt-1 md:flex-row">
              <Button
                variant="outline-secondary"
                className="w-full border-slate-300/80 bg-white/80 md:w-56 py-2.5 rounded-[0.5rem] dark:bg-darkmode-400"
              >
                <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button
                variant="outline-secondary"
                className="w-full border-slate-300/80 bg-white/80 md:w-56 py-2.5 rounded-[0.5rem] dark:bg-darkmode-400"
              >
                <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 mr-2" />
                Save & Add New
              </Button>
              <Button
                variant="primary"
                className="w-full md:w-56 py-2.5 rounded-[0.5rem]"
              >
                <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
          <div className="relative order-first col-span-12 lg:order-last lg:col-span-3 xl:col-span-2">
            <div className="sticky top-[104px]">
              <ul className="relative flex flex-col py-2.5 rounded-[0.6rem] bg-primary/[0.03] group-[.mode--light]:bg-slate-300/10 border border-primary/10 group-[.mode--light]:border-slate-300/20 text-slate-600/80 dark:group-[.mode--light]:bg-darkmode-500/60 dark:group-[.mode--light]:border-darkmode-200/60 dark:group-[.mode--light]:bg-darkmode-500/60 dark:group-[.mode--light]:border-darkmode-200/60">
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400 dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400 active",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Upload Product
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400 dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Product Information
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400 dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Product Detail
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400 dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Product Variant
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] group-[.mode--light]:text-white/90 [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 [.group.mode--light_&.active]:text-white [.group.mode--light_&.active]:before:bg-white dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400 dark:[.group.mode--light_&.active]:before:bg-white/50 dark:group-[.mode--light]:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Product Variant (Details)
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Product Management
                  </a>
                </li>
                <li
                  className={clsx([
                    "relative px-5 py-[9.2px] [&.active]:text-primary [&.active]:font-medium [&.active]:before:bg-primary/70 dark:text-slate-400 dark:text-slate-400",
                    "before:content-[''] before:absolute before:h-[60%] before:w-0.5 before:left-0 before:inset-y-0 before:my-auto before:-ml-px",
                  ])}
                >
                  <a className="block -mt-px truncate" href="">
                    Weight & Shipping
                  </a>
                </li>
              </ul>
              <div className="relative p-5 mt-7 border rounded-[0.6rem] bg-warning/[0.07] dark:bg-darkmode-600 border-warning/[0.15] dark:border-0">
                <Lucide
                  icon="Lightbulb"
                  className="absolute top-0 right-0 w-12 h-12 mt-5 mr-3 text-warning/80"
                />
                <h2 className="text-lg font-medium">Tips</h2>
                <div className="mt-4 font-medium">Price</div>
                <div className="mt-2 text-xs leading-relaxed text-slate-600/90 dark:text-slate-400">
                  <div>
                    The image format is .jpg .jpeg .png and a minimum size of
                    300 x 300 pixels (For optimal images use a minimum size of
                    700 x 700 pixels).
                  </div>
                  <div className="mt-2">
                    Select product photos or drag and drop up to 5 photos at
                    once here. Include min. 3 attractive photos to make the
                    product more attractive to buyers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
