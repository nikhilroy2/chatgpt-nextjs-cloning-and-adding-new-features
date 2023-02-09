import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";

function Home() {
  return (
    <div>
      <div className="chatgpt_wrapper">
        <h3 className="title">ChatGPT</h3>
        <ul className="grid_list">
          <li className="grid_list_item">
            <div className="item_header">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <br />
              <strong>Examples</strong>
            </div>
            <ul className="item_list_row">
              <li className="action_list">
                {" "}
                <q>
                  Explain quantum computing in simple terms
                </q>{" "}
                →
              </li>
              <li className="action_list">
                {" "}
                <q>
                  Got any creative ideas for a 10 year old’s birthday?
                </q>{" "}
                →
              </li>
              <li className="action_list">
                {" "}
                <q>
                  How do I make an HTTP request in Javascript?
                </q>{" "}
                →
              </li>
            </ul>
          </li>
          <li className="grid_list_item">
            <div className="item_header">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <br />
              <strong>Capabilities</strong>
            </div>
            <ul className="item_list_row">
              <li>
                {" "}
                <q>
                  Explain quantum computing in simple terms
                </q>{" "}
                →
              </li>
              <li>
                {" "}
                <q>
                  Got any creative ideas for a 10 year old’s birthday?
                </q>{" "}
                →
              </li>
              <li>
                {" "}
                <q>
                  How do I make an HTTP request in Javascript?
                </q>{" "}
                →
              </li>
            </ul>
          </li>
          <li className="grid_list_item">
            <div className="item_header">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <br />
              <strong>Capabilities</strong>
            </div>
            <ul className="item_list_row">
              <li>
                {" "}
                <q>
                  Explain quantum computing in simple terms
                </q>{" "}
                →
              </li>
              <li>
                {" "}
                <q>
                  Got any creative ideas for a 10 year old’s birthday?
                </q>{" "}
                →
              </li>
              <li>
                {" "}
                <q>
                  How do I make an HTTP request in Javascript?
                </q>{" "}
                →
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Home;
