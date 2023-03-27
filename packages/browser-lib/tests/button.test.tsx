import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { beforeEach, it, test } from "vitest";

import { Button } from "../src/components/button";

test("button", () => {
  beforeEach(async () => {
    render(<Button>sup</Button>);
    await waitFor(() => screen.getByText("sup"));
  });

  it("renders", () => {});
});
