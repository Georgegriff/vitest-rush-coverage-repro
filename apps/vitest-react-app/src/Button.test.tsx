import { describe, it, expect, vi } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renders button with text", async () => {
    const screen = render(<Button>Click me</Button>);
    await expect.element(screen.getByText("Click me")).toBeVisible();
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    const screen = render(<Button onClick={handleClick}>Click me</Button>);

    await screen.getByText("Click me").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("can be disabled", async () => {
    const screen = render(<Button disabled>Disabled button</Button>);
    const button = screen.getByText("Disabled button");
    await expect(button).toBeDisabled();
  });

  it("applies primary variant by default", async () => {
    const screen = render(<Button>Primary button</Button>);
    const button = screen.getByText("Primary button");
    await expect(button).toHaveClass("bg-blue-600");
  });

  it("applies secondary variant when specified", async () => {
    const screen = render(
      <Button variant="secondary">Secondary button</Button>
    );
    const button = screen.getByText("Secondary button");
    await expect(button).toHaveClass("bg-gray-200");
  });
});
