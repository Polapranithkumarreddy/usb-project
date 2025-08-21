import ProtectedRoute from '@/components/ProtectedRoute';

export default function USBDocs() {
  return (
    <ProtectedRoute>
      <div className="p-8 bg-gray-100 min-h-screen text-gray-800 font-sans">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">🔐 USB Port Control Tool</h1>

      <p className="mb-4">
        This is a Python-based GUI utility to <strong>enable or disable USB ports on Windows</strong> using a secure OTP verification system via email. It's ideal for administrators who want to control USB device access.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🛠️ Features</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>OTP-based USB access (6-digit code sent to email)</li>
        <li>Webcam recording if incorrect OTP is entered</li>
        <li>GUI interface built with Tkinter</li>
        <li>Enables/disables USB via Windows registry</li>
        <li>Admin check to ensure proper permissions</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">⚙️ Tech Stack</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Python 3</li>
        <li>Tkinter for GUI</li>
        <li>OpenCV for webcam recording</li>
        <li>smtplib and email for email sending</li>
        <li>winreg for Windows registry modification</li>
        <li>dotenv for environment variable management</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">📂 Environment Variables (.env)</h2>
      <pre className="bg-white p-4 rounded shadow text-sm overflow-auto">
{`GMAIL_ADDRESS=your_email@gmail.com
APP_PASSWORD=your_gmail_app_password
TO_EMAIL=recipient_email@gmail.com`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🧠 Core Functions</h2>
      <ul className="list-disc list-inside space-y-1">
        <li><code>generate_code()</code> – Generates 6-digit OTP</li>
        <li><code>send_email(code)</code> – Sends OTP via Gmail</li>
        <li><code>enable_usb_ports()</code> – Enables USB ports</li>
        <li><code>disable_usb_ports()</code> – Disables USB ports</li>
        <li><code>record_webcam_video()</code> – Captures 5 seconds of webcam footage on failed OTP</li>
        <li><code>is_admin()</code> – Checks for admin privileges</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">📋 Usage Flow</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>User launches the GUI (must be run as Admin)</li>
        <li>Clicks "Request Access Code" → Email is sent</li>
        <li>Enters the OTP to allow or block USB</li>
        <li>If OTP is wrong, webcam video is recorded</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-6 mb-2">🚨 Requirements</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Windows OS</li>
        <li>Admin privileges to edit registry</li>
        <li>Webcam access permission</li>
        <li>App password enabled for Gmail</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">📁 File Structure</h2>
      <pre className="bg-white p-4 rounded shadow text-sm overflow-auto">
{`usb_control_project/
├── main.py                  # Main script
├── .env                     # Contains email config
├── intruder.avi             # Recorded video
├── README.md                # Documentation (optional)`}
      </pre>
    </div>
    </ProtectedRoute>
    
  );
}
