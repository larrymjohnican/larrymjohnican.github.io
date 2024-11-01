import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import background from '../images/bg-pattern.jpg';

export function LoginForm({ credentials, handleInputChange, onLoginSubmit, formError }) {
  return (
    <div className="bg-fixed min-h-screen bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${background})`, zIndex: 0 }}>
      <Card className="max-w-sm">
        <form className="flex flex-col gap-4" onSubmit={onLoginSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="Enter email"
              required
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="Enter password"
              required
              value={credentials.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>

          {/* Display error message */}
          {formError && <p className="text-red-500 text-center">{formError}</p>}

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}

export default LoginForm;
