"use client";

import { useEffect, useState } from "react";
import { RenceAlert } from "@/lib/rence-alert";
import { Check, Copy, Menu, X } from "lucide-react";

export default function Home() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Load library engine
    if (!document.querySelector('script[src="./rence-alert.js"]')) {
      const script = document.createElement("script");
      script.src = "./rence-alert.js";
      script.async = true;
      document.body.appendChild(script);
    }

    if (!document.querySelector('link[href="./rence-alert.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "./rence-alert.css";
      document.head.appendChild(link);
    }
  }, []);

  const copyCode = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates({ ...copiedStates, [id]: true });
    setTimeout(() => {
      setCopiedStates({ ...copiedStates, [id]: false });
    }, 2000);
  };

  const CodeBlock = ({ id, code }: { id: string; code: string }) => (
    <div className="relative bg-[#282c34] text-[#abb2bf] rounded-md p-4 mt-3 overflow-x-auto text-sm font-mono leading-relaxed shadow-inner">
      <button 
        onClick={() => copyCode(id, code)}
        className="absolute top-2 right-2 p-1.5 bg-white/10 hover:bg-white/20 rounded transition"
      >
        {copiedStates[id] ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-300" />}
      </button>
      <pre><code>{code}</code></pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-[#333] font-sans selection:bg-[#6750A4] selection:text-white flex flex-col md:flex-row">
      
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b sticky top-0 z-50">
        <h2 className="text-xl font-black text-[#6750A4]">Rence Alert</h2>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-[#6750A4]">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        md:w-64 md:fixed md:top-0 md:bottom-0 md:left-0 bg-[#f8f9fa] border-r border-gray-200 p-6 md:pt-16 
        fixed top-[61px] bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        md:block overflow-y-auto
      `}>
        <h2 className="text-2xl font-black text-[#6750A4] mb-8 tracking-tight hidden md:block">Rence Alert</h2>
        <nav className="flex flex-col gap-6 md:gap-4 text-[17px] md:text-[15px] font-medium text-gray-600">
          <a href="#examples" onClick={() => setIsMenuOpen(false)} className="hover:text-[#6750A4] transition-colors">Examples</a>
          <a href="#download" onClick={() => setIsMenuOpen(false)} className="hover:text-[#6750A4] transition-colors">Download & Install</a>
          <a href="#usage" onClick={() => setIsMenuOpen(false)} className="hover:text-[#6750A4] transition-colors">Usage</a>
          <a href="#configuration" onClick={() => setIsMenuOpen(false)} className="hover:text-[#6750A4] transition-colors">Configuration Params</a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64">
      {/* Header aligned like SweetAlert */}
      <header className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-[#6750A4] mb-4 tracking-tight drop-shadow-sm">
          Rence Alert
        </h1>
        <p className="text-gray-500 font-medium mb-6">Current version: v1.0.0</p>
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          A beautiful, responsive, customizable, and accessible replacement for JavaScript's standard popup boxes.
        </p>
        <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full font-bold text-sm tracking-widest uppercase shadow-sm">
          Strict Material Design 3
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-24">
        <h2 id="examples" className="text-3xl font-bold mb-10 border-b pb-4 text-gray-800 pt-8 mt-8">Examples</h2>

        <div className="space-y-16">
          {/* Example 1: Success Message */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">A basic success message</h3>
            <button 
              onClick={() => RenceAlert.success("Good job!", "You clicked the button!")}
              className="px-6 py-2.5 rounded shadow-[0_2px_5px_rgba(0,0,0,0.15)] bg-white border border-gray-200 hover:bg-gray-50 font-medium text-[#6750A4] transition-all hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] active:scale-95"
            >
              Try me!
            </button>
            <CodeBlock 
              id="ex1" 
              code={`RenceAlert.success(\n  "Good job!", \n  "You clicked the button!"\n);`} 
            />
          </div>

          {/* Example 2: Question/Info under text */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">A title with a text under</h3>
            <button 
              onClick={() => RenceAlert.info("The Internet?", "That thing is still around?")}
              className="px-6 py-2.5 rounded shadow-[0_2px_5px_rgba(0,0,0,0.15)] bg-white border border-gray-200 hover:bg-gray-50 font-medium text-[#6750A4] transition-all hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] active:scale-95"
            >
              Try me!
            </button>
            <CodeBlock 
              id="ex2" 
              code={`RenceAlert.fire({\n  title: "The Internet?",\n  text: "That thing is still around?",\n  icon: "info"\n});`} 
            />
          </div>

          {/* Example 3: Error modal */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">A modal with a title, an error icon, and a text</h3>
            <button 
              onClick={() => RenceAlert.error("Oops...", "Something went wrong!")}
              className="px-6 py-2.5 rounded shadow-[0_2px_5px_rgba(0,0,0,0.15)] bg-white border border-gray-200 hover:bg-gray-50 font-medium text-[#6750A4] transition-all hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] active:scale-95"
            >
              Try me!
            </button>
            <CodeBlock 
              id="ex3" 
              code={`RenceAlert.fire({\n  title: "Oops...",\n  text: "Something went wrong!",\n  icon: "error"\n});`} 
            />
          </div>

          {/* Example 4: Warning with Cancel */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">A dialog with a cancel button</h3>
            <button 
              onClick={() => RenceAlert.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!"
              }).then((result: any) => {
                if (result.isConfirmed) {
                  RenceAlert.success("Deleted!", "Your file has been deleted.");
                } else if (result.isDismissed) {
                  RenceAlert.error("Cancelled", "Your imaginary file is safe :)");
                }
              })}
              className="px-6 py-2.5 rounded shadow-[0_2px_5px_rgba(0,0,0,0.15)] bg-white border border-gray-200 hover:bg-gray-50 font-medium text-[#6750A4] transition-all hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] active:scale-95"
            >
              Try me!
            </button>
            <CodeBlock 
              id="ex4" 
              code={`RenceAlert.fire({\n  title: "Are you sure?",\n  text: "You won't be able to revert this!",\n  icon: "warning",\n  showCancelButton: true,\n  confirmButtonText: "Yes, delete it!",\n  cancelButtonText: "No, cancel!"\n}).then((result) => {\n  if (result.isConfirmed) {\n    RenceAlert.success("Deleted!", "Your file has been deleted.");\n  } else if (result.isDismissed) {\n    RenceAlert.error("Cancelled", "Your imaginary file is safe :)");\n  }\n});`} 
            />
          </div>

          {/* Example 5: Custom Colors & Width */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Advanced Customization (Colors, Width, BG)</h3>
            <p className="text-gray-600 mb-4 text-sm">You can resize the card, change button colors, or even update the icon colors dynamically.</p>
            <button 
              onClick={() => RenceAlert.fire({
                title: 'Custom Style!',
                text: 'This alert has a custom width and colors.',
                icon: 'success',
                width: '600px',
                confirmButtonColor: '#00BFA5',
                iconColor: '#00BFA5',
                background: '#f0fdfa'
              })}
              className="px-6 py-2.5 rounded shadow-[0_2px_5px_rgba(0,0,0,0.15)] bg-white border border-gray-200 hover:bg-teal-50 font-medium text-teal-600 transition-all hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] active:scale-95"
            >
              Try me!
            </button>
            <CodeBlock 
              id="ex5" 
              code={`RenceAlert.fire({\n  title: 'Custom Style!',\n  text: 'Custom width and colors.',\n  icon: 'success',\n  width: '600px',\n  confirmButtonColor: '#00BFA5',\n  iconColor: '#00BFA5',\n  background: '#f0fdfa'\n});`} 
            />
          </div>

          {/* Example 6: Toast Notifications */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Non-blocking Toast Notifications (Material 3 Snackbar)</h3>
            <div className="flex gap-4">
              <button 
                onClick={() => RenceAlert.toast("Signed In", "Signed in successfully", "success")}
                className="px-6 py-2.5 rounded shadow-[0_2px_5px_rgba(0,0,0,0.15)] bg-white border border-gray-200 hover:bg-gray-50 font-medium text-[#4CAF50] transition-all hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] active:scale-95"
              >
                Success Toast
              </button>
              <button 
                onClick={() => RenceAlert.toast("Network Error", "Unable to connect", "error")}
                className="px-6 py-2.5 rounded shadow-[0_2px_5px_rgba(0,0,0,0.15)] bg-white border border-gray-200 hover:bg-gray-50 font-medium text-[#F44336] transition-all hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] active:scale-95"
              >
                Error Toast
              </button>
            </div>
            <CodeBlock 
              id="ex5" 
              code={`// Fire a simple Material Design toast on the top right\nRenceAlert.toast("Signed In", "Signed in successfully", "success");\nRenceAlert.toast("Network Error", "Unable to connect", "error");`} 
            />
          </div>
        </div>

        {/* Setup instructions */}
        <h2 id="download" className="text-3xl font-bold mb-10 mt-24 border-b pb-4 text-gray-800 pt-8">Download & Install</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Install via NPM</h3>
            <CodeBlock id="inst1" code={`npm install rence-alert`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Or grab from jsDelivr CDN</h3>
            <p className="text-sm text-gray-600 mb-2">Note: For direct GitHub CDN, your repository must be set to <b>Public</b>. Alternatively, use the NPM CDN once published.</p>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Via NPM (Highly Recommended)</p>
                <CodeBlock id="inst-npm-cdn" code={`<!-- CSS -->\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/rence-alert@latest/public/rence-alert.css">\n\n<!-- JavaScript -->\n<script src="https://cdn.jsdelivr.net/npm/rence-alert@latest/public/rence-alert.js"></script>`} />
              </div>
              <div className="pt-4 border-t border-gray-50 mt-4 opacity-60">
                <p className="text-xs font-bold text-gray-400 uppercase">Via GitHub (Legacy)</p>
                <CodeBlock id="inst-gh" code={`<!-- CSS -->\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/DavidAbalaku/Rence-Alert@main/public/rence-alert.css">\n\n<!-- JavaScript -->\n<script src="https://cdn.jsdelivr.net/gh/DavidAbalaku/Rence-Alert@main/public/rence-alert.js"></script>`} />
              </div>
            </div>
          </div>
        </div>
        
        <h2 id="usage" className="text-3xl font-bold mb-10 mt-24 border-b pb-4 text-gray-800 pt-8">Usage</h2>
        <div className="space-y-12">
          
          <div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">1. Usage in HTML / JavaScript</h3>
            <p className="text-gray-700 mb-3">After importing the script via CDN, the <code>RenceAlert</code> object will be available globally on the <code>window</code>. You can trigger it inside standard functions.</p>
            <CodeBlock id="use-html" code={`<!-- Include CDN in head -->\n<button onclick="showAlert()">Test</button>\n\n<script>\n  function showAlert() {\n    RenceAlert.success('Saved!', 'Your settings are updated.');\n  }\n</script>`} />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">2. Usage in React / Next.js</h3>
            <p className="text-gray-700 mb-3">You can import the module directly into your Client Components. There is no need to manually append scripts if you use the NPM package.</p>
            <CodeBlock id="use-react" code={`import { RenceAlert } from 'rence-alert';\n\nexport default function DeleteButton() {\n  const handleDelete = () => {\n    RenceAlert.fire({\n      title: 'Warning',\n      text: 'Do you want to drop this database?',\n      icon: 'warning',\n      showCancelButton: true\n    }).then((res) => {\n      if(res.isConfirmed) console.log("Database Deleted");\n    });\n  };\n\n  return <button onClick={handleDelete}>Delete</button>;\n}`} />
          </div>

        </div>

        <h2 id="configuration" className="text-3xl font-bold mb-10 mt-24 border-b pb-4 text-gray-800 pt-8">Configuration Params</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-gray-600 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-bold text-gray-900">Argument</th>
                <th className="px-6 py-4 font-bold text-gray-900">Default Value</th>
                <th className="px-6 py-4 font-bold text-gray-900">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-[#6750A4] font-semibold">title</td>
                <td className="px-6 py-4 font-mono text-gray-500">''</td>
                <td className="px-6 py-4">The main heading of the popup.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-[#6750A4] font-semibold">text</td>
                <td className="px-6 py-4 font-mono text-gray-500">''</td>
                <td className="px-6 py-4">The secondary body description under the title.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-[#6750A4] font-semibold">icon</td>
                <td className="px-6 py-4 font-mono text-gray-500">'info'</td>
                <td className="px-6 py-4">Select the Material animated icon. Valid options: <code className="bg-gray-100 px-1 rounded">'success'</code>, <code className="bg-gray-100 px-1 rounded">'error'</code>, <code className="bg-gray-100 px-1 rounded">'warning'</code>, <code className="bg-gray-100 px-1 rounded">'info'</code>.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-[#6750A4] font-semibold">confirmButtonText</td>
                <td className="px-6 py-4 font-mono text-gray-500">'OK'</td>
                <td className="px-6 py-4">Change the text of the main positive action button.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-[#6750A4] font-semibold">showCancelButton</td>
                <td className="px-6 py-4 font-mono text-gray-500">false</td>
                <td className="px-6 py-4">Set to <code className="bg-gray-100 px-1 rounded">true</code> to display a dismissive cancel button.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-[#6750A4] font-semibold">cancelButtonText</td>
                <td className="px-6 py-4 font-mono text-gray-500">'Cancel'</td>
                <td className="px-6 py-4">Change the text of the cancel button (only visible if <code className="bg-gray-100 px-1 rounded">showCancelButton</code> is true).</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Credits */}
        <footer className="mt-32 pt-10 pb-16 border-t border-gray-100 text-center text-gray-500">
          <p className="font-medium text-gray-600 mb-2">Designed and Built by <strong>David Abalaku</strong>.</p>
          <p className="text-sm">A beautiful, zero-dependency alternative for developers globally.</p>
          <div className="mt-6 inline-flex gap-4 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6750A4]"></span>
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-400">Rence Alert v1.0.0</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6750A4]"></span>
          </div>
        </footer>

      </div>
      </main>
    </div>
  );
}
