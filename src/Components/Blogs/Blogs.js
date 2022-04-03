import React from 'react';
import { BsQuestionLg } from 'react-icons/bs'
import './Blogs.css'

const Blogs = () => {
    return (
        <section>
            <h3 className='text-center pb-3'> Look Here Some Question's Answer.</h3>
            <div className="accordion w-md-75" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Q#1: What is context Api  <BsQuestionLg className='herColor' />
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>The React Context API</strong> is a way to effectively create global variables for a React app that can be passed around. This is an alternative to "prop drilling" or moving props from grandparents to children to parents. The context is also referred to as a simple, light method for managing the state using Redox. <br />
                            React.createContext() is all we need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Q#2: What is context Api  <BsQuestionLg className='herColor' />
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>A semantic</strong> elemen A semantic element clearly describes its meaning to both the browser and the developer. Examples of nonsemantic elements: div, span, Tells nothing about its content. Examples of semantic elements: form, table, article etc. So,  semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Q#3: Difference between inline, block, inline-block  <BsQuestionLg className='herColor' />
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Inline</strong> elements dose not start on a new line and only occupy just the width it requires. You cannot set the width or height. <br />
                            <em>Example:
                                <ul>
                                    <li>img tag</li>
                                    <li>anchor tag</li>
                                    <li>button tag</li>
                                </ul>
                                etc
                            </em> <br />

                            <strong>Block</strong> elements will start on a new line and ouccypy the full width available and you can set also width and height values. <br />
                            <em>Example: <ul>
                                <li>p tag</li>
                                <li>Heading tag: h1,h2,h3, etc</li>
                                <li>ol,ul</li>
                            </ul> etc </em> <br />

                            <strong>Inline-block</strong> formatted just like the inline element, where it doesnot start on a new line. But you can set width and height values. <br />
                            <em>Example:
                                <ul>
                                    <li>strong tag</li>
                                    <li>span tag</li>

                                </ul>
                                etc
                            </em>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;